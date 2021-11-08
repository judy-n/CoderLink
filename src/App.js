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
import UserEntity from './model/User';
import EditProfile from './views/editProfile';
import PostEntity from './model/Post';
import SignupPage from './views/SignupPage';

import { addPost, getUserPosts, removePost } from './actions/PostListActions';
import { addUser, removeUser, getUser } from './actions/UserListActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addPost = addPost.bind(this);
    this.getUserPosts = getUserPosts.bind(this);
    this.removePost = removePost.bind(this);
    this.addUser = addUser.bind(this);
    this.removeUser = removeUser.bind(this);
    this.getUser = getUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.changeCurrentPost = this.changeCurrentPost.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

    const newUser = new UserEntity('admin', 'admin');
    newUser.addInformation('Admin', 21, 'They/Them', '', ['JavaScript', 'React'], 'University of Toronto');
    newUser.userType = 'admin';
    this.setState({
      userList: [newUser],
      currentUser: newUser
    });
    const newPost1 = new PostEntity('admin');
    newPost1.addInformation(
      'Recommender system for cafes',
      'Using machine mearning to recommend cafes to users based on their previous choices',
      '',
      'University of Toronto',
      ['Python', 'Deep learning']
    );
    const newPost2 = new PostEntity('johnny');
    newPost2.addInformation(
      'A game engine in C',
      'Designing a game engine which would provide anime style physics for a game I am working on',
      '',
      'University of Toronto',
      ['C', 'Linear algebra', 'Vector calculus']
      );
    const newPost3 = new PostEntity('chloe');
    newPost3.addInformation(
      'An application to support the underprivileged',
      'We need a flutter developer for our application which aims to help the homeless and needy',
      '',
      'University of Waterloo',
      ['Flutter', 'Figma']
    );
    
    this.state = {
      postList: [newPost1, newPost2, newPost3],
      userList: [newUser],
      currentUser: newUser,
      loggedIn: false,
      currentPost: null
    }
  }

  handleLogin(username, password) {
    const user = this.getUser(username);
    if(user) {
      const loginStatus = user.verifyPassword(password);
      this.setState({
        loggedIn: loginStatus,
        currentUser: user
      });
    }
    return this.state.loggedIn;
  }

  handleLogout() {
    this.setState({
      currentUser: null,
      loggedIn: false
    })
  }

  handleSignup(user) {
    if(this.getUser(user.username) == null) {
      this.addUser(user);
    }
  }

  changeCurrentPost(post) {
    this.setState({
      currentPost: post
    });
  }
  
  updateProfile(new_user, new_name, new_bio, new_inst, new_skills) 
     {
         const newUser = this.state.currentUser
         newUser.username = new_user
         newUser.name = new_name
         newUser.about = new_bio
         newUser.institution = new_inst
         newUser.skills = new_skills
         
         this.setState ({
           currentUser: newUser
         })

       
    }


  render() {
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
                              postList = {this.state.postList} 
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
                            
                              username={this.state.currentUser.username}
                              name={this.state.currentUser.name}
                              bio={this.state.currentUser.about}
                              institution= {this.state.currentUser.institution}
                              skills= {this.state.currentUser.skills}
                      
                            
                            />)}/>
        <Route exact path='/login' render={() => 
                            (<Login
                              handleLogin={this.handleLogin}
                              loggedIn={this.state.loggedIn}
                            />)}/>
        <Route exact path='/post' render={() => 
                            (<Post
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
                              updateProfile = {this.updateProfile}
                            />)}/>
        </Switch>
       </BrowserRouter>
      </div>
    );
  }

}

export default App;
