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

import { addPost, getUserPosts, removePost } from './actions/PostListActions';
import { addUser, removeUser, getUser } from './actions/UserListActions';

class App extends React.Component {

  state = {
    userList: [],
    postList: [],
    currentUser: null,
    loggedIn: false
  }

  constructor(props) {
    super(props);
    this.addPost = addPost.bind(this);
    this.getUserPosts = getUserPosts.bind(this);
    this.removePost = removePost.bind(this);
    this.addUser = addUser.bind(this);
    this.removeUser = removeUser.bind(this);
    this.getUser = getUser.bind(this);
  }

  componentDidMount() {
    const newUser = new UserEntity('admin', 'admin');
    newUser.addInformation('Admin', 21, 'They/Them', '', ['JavaScript', 'React'], 'University of Toronto');
    this.setState({currentUser: newUser});
  }

  render() {
    return(
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact path='/' render={() => 
                            (<Home postList = {this.state.postList} addPost = {this.addPost}/>)}/>
        <Route exact path='/profile' render={() => 
                            (<Profile/>)}/>
        <Route exact path='/login' render={() => 
                            (<Login/>)}/>
        <Route exact path='/post' render={() => 
                            (<Post/>)}/>
        
        <Route exact path='/portfolio' render={() => 
                            (<Portfolio/>)}/>
        <Route exact path='/newPostPage' render={() =>
                            (<NewPostPage
                              currentUser={this.state.currentUser}
                              addPost={this.addPost}
                            />)}/>
        
        </Switch>
       </BrowserRouter>
      </div>
    );
  }

}

export default App;
