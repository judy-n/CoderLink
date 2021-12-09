# team34

# CoderLink
#### CoderLink helps students find teammates to work on side projects with.
Check it out here! -> https://coderlink.herokuapp.com/

### Credentials
Standard User
- username: user
- password: user

Admin User
- username: admin
- password: admin

And others users can easily be added in the sign up page.

### Features
- A user simply makes a post about a project idea as well as the required skills, and other users can apply to join it. 
  - A user can create a post in the home page using the "Create Post" button.
  - Other users would view the post in the home page, click on "View More" and apply using the "Apply" button.


- To use all the features, users should sign up and make a profile, where they display their institution, skills, and their GitHub/LinkedIn URLs.
- The Home page is a dashboard showing recent posts, and a logged-in user can easily create a post or apply to one.
- When someone applies to a post, the author of the post can see a list of the applicants and their messages displayed on that post page. They can then click on each entry, which takes them to that applicant's profile.
- Each user's profile contains some info, as well as their recent posts. They can edit their information by clicking the Settings icon.
- Posts can be deleted by their author and by admin users (either from the Home page or from inside the post).

### Admin Features
- Admins have the same features as normal users, except that they can delete posts and view applications for any post.

## Routes

Our backend uses various routes for Post and User objects.

#### User Routes

- **POST** `/api/users`: Create a new username with the corresponding info
  
``` 
{
  username: '',
    password: '',
    fullname: '',
    about: '',
    skills: [],
    institution: '',
    userType: "user" | "admin", 
    github: '',
    linkedin: ''
 }
```


- **GET** `/api/users`: Return all registered users
- **GET** `/api/users/:username`: Return the user object with username `username`



- **POST** `/api/users/:username`: Update the info of the user with username `username`
``` 
{
  username: '',
  password: '',
  fullname: '',
  about: '',
  skills: [],
  institution: '',
  userType: "user" | "admin", 
  github: '',
  linkedin: ''
}
```

- **POST** `/users/login`: Login the user and create a new session
``` 
{
  username: '',
  password: '',
}
```

- **GET** `/users/logout`: Logout the current user and destroy the session
- **GET** `/users/check-session`: Check if a user is logged in on the session

#### Post Routes

- **POST** `/api/posts`: Create a new post with the corresponding info (the applications initialize as an empty array)
```
{  
  author: '',
  title: '',
  description: '',
  institution: '',
  skillsRequired: '',
  applications: []
}
```
- **GET** `/api/posts`: Return all posts
- **GET** `/api/posts/:id`: Return the post with id `id`
- **DELETE** `/api/posts/:id`: Delete the post with id `id`
- **GET** `/api/posts/user/:username`: Get all posts of the user with username `username`

