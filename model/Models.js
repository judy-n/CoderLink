const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    about: String,
    skills: Array,
    institution: String,
    userType: String,
	github: String,
	linkedin: String
});

const PostSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    institution: String,
    skillsRequired: Array,
	applications: Array
})

// A static method on the document model.
// Allows us to find a User document by comparing the password
//  to a given one, for example when logging in.
UserSchema.statics.findByUsernamePassword = function(username, password) {
	const User = this
	
	// Find user by username
	return User.findOne({ username: username }).then((user) => {
		console.log("found", user)
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
				if (password == user.password) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
}

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);


module.exports = { User, Post };