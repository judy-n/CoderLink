"use strict";

const log = console.log;
const path = require('path')

const express = require("express");
// starting the express server
const app = express();

const bodyParser = require('body-parser') 
app.use(bodyParser.json()) // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)
app.use(express.static(path.join(__dirname, "/client/build")));

const env = process.env.NODE_ENV 
// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
// if (env !== 'production') { app.use(cors()) }

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
// mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User1, Post1} = require("./model/Models");

// to validate object IDs
const { ObjectID } = require("mongodb");

const session = require("express-session");
const MongoStore = require('connect-mongo') // to store session information on the database in production


function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

const authenticate = (req, res, next) => {
    if (req.session.user) {
        User1.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}

// Session handling
// Create a session and session cookie
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: env === 'production' ? MongoStore.create({
                                                mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/TeamFinderAPI'
                                 }) : null
    })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Use the static method on the User model to find a user
    // by their email and password
    User1.findByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username; 
            res.send({ currentUser: user.username });
        })
        .catch(error => {
            res.status(400).send()
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

// API ROUTES


// Create a new User
app.post('/api/users', mongoChecker, async (req, res) => {

    const user = new User1({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        about: req.body.about,
        skills: req.body.skills.split(","),
        institution: req.body.institution,
        userType: "user"
    })

    try {
        const user_query = req.body.username
        const same_user = await User1.find({username: user_query})
        // Means username is taken already
        if (same_user.length > 0) {
            res.send("Username is taken already");
        } else {
            // Save the user
            const newUser = await user.save()
            res.send(newUser)
        }
    } catch (error) {
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') 
        }
    }

})

// Get all Users
app.get('/api/users', mongoChecker, async (req, res) => {

    // Get the students
    try {
        const users = await User1.find()
        res.send(users) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// Get User from username
app.get('/api/users/:username', mongoChecker, async (req, res) => {
    const user_query = req.params.username

    try {
        const user = await User1.findOne({username: user_query})
        if (!user) {
            res.status(404).send('User not found') 
        } else {
        res.send(user) 
        }
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// Update info of User with this username
app.post('/api/users/:username', mongoChecker, async (req, res) => {

    console.log("req body in server.js:", req.body)

    const user_query = req.params.username
    const new_name = req.body.name
    const new_about = req.body.about
    const new_inst = req.body.institution
    const new_skills = req.body.skills


  
    try {
        const user = await User1.findOneAndUpdate({username: user_query}, {$set: {name: new_name, about: new_about, institution: new_inst, skills: new_skills}}, {new: true, useFindAndModify: false})
        if (!user) {
            res.status(404).send('User not found') 
        } else {
        res.send(user) 
        }
    } catch(error) {
        log('yos', error)
        res.status(500).send("Internal Server Error")
    }

})

// Create a post
app.post('/api/posts', mongoChecker, authenticate, async (req, res) => {

    const post = new Post1({
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    institution: req.body.institution,
    skillsRequired: req.body.skillsRequired
    })

    try {
        const newPost = await post.save()
        res.send(newPost)
    } catch (error) {
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') 
        }
    }

})


// Get all posts
app.get('/api/posts', mongoChecker, async (req, res) => {

    try {
        const posts = await Post1.find()
        res.send({ posts })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// Get a user's posts (given the username)
app.get('/api/posts/:username', mongoChecker, authenticate, async (req, res) => { 
    const user = req.params.username

    try {
        const posts = await Post1.find({author: user})
        if (!posts) {
            res.status(404).send('User not found') 
        } else {
            res.send(posts)
        }

    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// if it doesn't match an api route - serve the build
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

// Express server listening...
const port = process.env.PORT || 5001;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});