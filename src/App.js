import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

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
      loggedIn: false
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

  handleSignup(user) {
    if(this.getUser(user.username) == null) {
      this.addUser(user);
    }
  }

  render() {
    return(
      <div>
        <BrowserRouter>
        <Switch>
        
        <Route exact path='/' render={() => 
                            (<Home 
                              postList = {this.state.postList} 
                              addPost = {this.addPost}
                              currentUsername = {this.state.currentUser.username}
                              isAdmin = {this.state.currentUser.userType === 'admin'}
                              />
                            )}/>
        <Route exact path='/profile' render={() => 
                            (<Profile/>)}/>
        <Route exact path='/login' render={() => 
                            (<Login
                              handleLogin={this.handleLogin}
                              loggedIn={this.state.loggedIn}
                            />)}/>
        <Route exact path='/post' render={() => 
                            (<Post/>)}/>
        
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
                              username="judy-n"
                              name="Judy Naamani" 
                              bio="Hi I'm a silly goose!"
                              institution= "University of Toronto"
                              skills= {["Python", "Java"]}

                            />)}/>
        </Switch>
       </BrowserRouter>
      </div>
    );
  }

}

export default App;
