import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

import Profile from './views/profilePage/index';
import Home from './views/Home';
import Login from './views/Login'
import Portfolio from './views/Portfolio';
import NewPostPage from './views/newPostPage';
import EditProfile from './views/editProfile';
import SignupPage from './views/SignupPage';
import PostPage from './views/PostPage';


import { checkSession, login, logout, signup, getUser, editUser } from "./actions/user";
import { makePost, getPostById, deletePost } from "./actions/post"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.getUser = this.getUser.bind(this)

    this.state = {
      postList: [],
      userList: [],
      currentUser: {
        username: null,
        fullname: null,
        about: null,
        skills: null,
        institution: null,
        userType: null,
          github: null,
          linkedin: null
      },
      loggedIn: false,
      currentPost: null
    }
  }


    async componentDidMount() {
    const username = await checkSession(this); // sees if a user is logged in
    console.log("APP.js passing in", username)
    const user = await getUser(username)
    this.setState({
      currentUser: {
        username: user.username,
        fullname: user.fullname,
        about: user.about,
        skills: user.skills,
        institution: user.institution,
        userType: user.userType,
          github: user.github,
          linkedin: user.linkedin
      },
      loggedIn: user !== undefined
    })
  }

  async handleLogin(username, password) {
    console.log("Sending", username, password)
    const user = await login({username, password})
    console.log('response', user)
    const userObj = await getUser(user)
    if(user) {
      this.setState({
        loggedIn: true,
        currentUser: userObj,
      })
      return true
    }
    return false;
  }

  async handleLogout() {
    await logout(this)
  }

  async getUser(username) {
      await getUser(username)
  }

  async handleSignup(username, password, fullname, about, skills, institution, github, linkedin) {
    const user = await signup(username, password, fullname, about, skills, institution, github, linkedin)
  }

  async addPost(author, title, description, institution, skillsRequired) {
    const post = await makePost(author, title, description, institution, skillsRequired)
  }

  async deletePost(id) {
      const post = await deletePost(id)
  }

  
  async editProfile(username, new_name, new_bio, new_inst, new_skills, new_github, new_linkedin) {
    const user = await editUser(username, new_name, new_bio, new_inst, new_skills, new_github, new_linkedin)
    this.setState({currentUser: user})
  }

  render() {
    const { currentUser } = this.state
    return(
      <div>
        <BrowserRouter>
        <Switch>
        
        <Route
          exact path='/'
          render={() => (<Redirect to='/home'/>)}
        />
        
        <Route exact path='/home' render={() => 
                            (<Home 
                              addPost = {this.addPost}
                              currentUsername = {this.state.currentUser.username}
                              isAdmin = {this.state.currentUser.userType === 'admin'}
                              removePost = {this.deletePost}
                              handleLogout = {this.handleLogout}
                              loggedIn={this.state.loggedIn}
                              />
                            )}/>
            <Route exact path='/profile/:username' render={(props) =>
                            (<Profile
                                {...props}
                                currentUsername={this.state.currentUser.username}
                                loggedInUser={this.state.currentUser}
                                handleLogout={this.handleLogout}
                                loggedIn={this.state.loggedIn}
                            />)}/>
        <Route exact path='/login' render={() => 
                            (<Login
                                currentUsername = {this.state.currentUser.username}
                              handleLogin={this.handleLogin}
                              loggedIn={this.state.loggedIn}
                                handleLogout = {this.handleLogout}
                            />)}/>
        <Route exact path='/post' render={() => 
                            (<PostPage
                              currentPost={this.state.currentPost}
                              currentUser={this.state.currentUser}
                              currentUsername={this.state.currentUser.username}
                              handleLogout = {this.handleLogout}
                              loggedIn={this.state.loggedIn}
                              isAdmin={this.state.isAdmin}
                            />)}/>

        <Route exact path='/post/:id' render={ (props) => 
                            (<PostPage 
                              {...props}
                              loggedIn={this.state.loggedIn}
                              currentUser={this.state.currentUser}
                              currentUsername={this.state.currentUser.username}
                              handleLogout = {this.handleLogout}
                              isAdmin={this.state.currentUser.userType === 'admin'}
                              removePost={this.deletePost}
                            />) } /> 

        
        <Route exact path='/portfolio' render={() => 
                            (<Portfolio 
                              handleLogout = {this.handleLogout}
                              loggedIn={this.state.loggedIn}
                              />)}/>
        <Route exact path='/newPostPage' render={() =>
                            (<NewPostPage
                                currentUsername = {this.state.currentUser.username}
                              currentUser={this.state.currentUser}
                              addPost={this.addPost}
                              handleLogout = {this.handleLogout}
                              loggedIn={this.state.loggedIn}
                            />)}/>

        <Route
          exact path='/signup'
          render={
            () => (
              <SignupPage
                  currentUsername = {this.state.currentUser.username}
                handleSignup={this.handleSignup}
                handleLogout={this.handleLogout}
                loggedIn={this.state.loggedIn}
              />
            )
          }
        />
        
        <Route exact path='/editProfile' render={() =>
                            (<EditProfile
                                currentUsername = {this.state.currentUser.username}
                              currentUser={this.state.currentUser}
                              editProfile = {this.editProfile}
                              loggedIn={this.state.loggedIn}
                              handleLogout = {this.handleLogout}
                            />)}/>
        </Switch>

       </BrowserRouter>
      </div>
    );
  }

}

export default App;
