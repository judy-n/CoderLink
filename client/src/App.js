import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

import Profile from './views/profilePage/index';
import Home from './views/Home';
import Login from './views/Login'
import Post from './views/posts/index';
import Portfolio from './views/Portfolio';
import NewPostPage from './views/newPostPage';
// import UserEntity from '../../model/User';
import EditProfile from './views/editProfile';
// import PostEntity from '../../model/Post';
import SignupPage from './views/SignupPage';
import PostPage from './views/PostPage';

// import { addPost, getUserPosts, removePost } from './actions/PostListActions';
// import { addUser, removeUser, getUser } from './actions/UserListActions';

import { checkSession, login, logout, signup, getUser, editUser} from "./actions/user";
import { makePost } from "./actions/post"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    // this.getUserPosts = getUserPosts.bind(this);
    // this.removePost = removePost.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.changeCurrentPost = this.changeCurrentPost.bind(this);
    this.editProfile = this.editProfile.bind(this);

    // const newUser = new UserEntity('admin', 'admin');
    // newUser.addInformation('Admin', 21, 'They/Them', '', ['JavaScript', 'React'], 'University of Toronto');
    // newUser.userType = 'admin';
    // this.setState({
    //   userList: [],
    //   currentUser: null
    // });
  //   const newPost1 = new PostEntity('admin');
  //   newPost1.addInformation(
  //     'Recommender system for cafes',
  //     'Using machine mearning to recommend cafes to users based on their previous choices',
  //     '',
  //     'University of Toronto',
  //     ['Python', 'Deep learning']
  //   );
  //   const newPost2 = new PostEntity('johnny');
  //   newPost2.addInformation(
  //     'A game engine in C',
  //     'Designing a game engine which would provide anime style physics for a game I am working on',
  //     '',
  //     'University of Toronto',
  //     ['C', 'Linear algebra', 'Vector calculus']
  //     );
  //   const newPost3 = new PostEntity('chloe');
  //   newPost3.addInformation(
  //     'An application to support the underprivileged',
  //     'We need a flutter developer for our application which aims to help the homeless and needy',
  //     '',
  //     'University of Waterloo',
  //     ['Flutter', 'Figma']
  //   );
    
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
      },
      loggedIn: false,
      currentPost: null
    }
  }


  async componentDidMount() {
    const username = await checkSession(this); // sees if a user is logged in
    console.log("APP.js passing in", username)
    const user = await getUser(username)
    console.log('makhadde', user)
    this.setState({
      currentUser: {
        username: user.username,
        fullname: user.fullname,
        about: user.about,
        skills: user.skills,
        institution: user.institution,
        userType: user.userType,
      }
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

  async handleSignup(username, password, fullname, about, skills, institution) {
    const user = await signup(username, password, fullname, about, skills, institution)
  }

  async addPost(author, title, description, institution, skillsRequired) {
    const post = await makePost(author, title, description, institution, skillsRequired)
  }

  changeCurrentPost(post) {
    this.setState({
      currentPost: post
    });
  }
  
  async editProfile(username, new_name, new_bio, new_inst, new_skills) {
    const user = await editUser(username, new_name, new_bio, new_inst, new_skills)
  }

  render() {
    const { currentUser } = this.state
    return(
      <div>
        <BrowserRouter>
        <Switch>
        
        <Route
          exact path='/'
          render={() => (<Redirect to='/login'/>)}
        />
        
        <Route exact path='/home' render={() => 
                            (<Home 
                              addPost = {this.addPost}
                              currentUsername = {this.state.currentUser.username}
                              isAdmin = {this.state.currentUser.userType === 'admin'}
                              removePost = {this.removePost}
                              handleLogout = {this.handleLogout}
                              changeCurrentPost={this.changeCurrentPost}
                              />
                            )}/>
        <Route exact path='/profile' render={() => 
                            (<Profile
                              currentUser={this.state.currentUser}
                            />)}/>
        <Route exact path='/login' render={() => 
                            (<Login
                              handleLogin={this.handleLogin}
                              loggedIn={this.state.loggedIn}
                            />)}/>
        <Route exact path='/post' render={() => 
                            (<PostPage
                              currentPost={this.state.currentPost}
                            />)}/>
        
        <Route exact path='/portfolio' render={() => 
                            (<Portfolio/>)}/>
        <Route exact path='/newPostPage' render={() =>
                            (<NewPostPage
                              currentUser={this.state.currentUser}
                              addPost={this.addPost}
                            />)}/>

        <Route
          exact path='/signup'
          render={
            () => (
              <SignupPage 
                handleSignup={this.handleSignup}
              />
            )
          }
        />
        
        <Route exact path='/editProfile' render={() =>
                            (<EditProfile
                              currentUser={this.state.currentUser}
                              editProfile = {this.editProfile}
                            />)}/>
        </Switch>

       </BrowserRouter>
      </div>
    );
  }

}

export default App;
