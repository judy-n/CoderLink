import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Profile from './views/profilePage/index';
import Home from './views/Home';
import Login from './views/Login'
import Post from './views/posts/index';

class App extends React.Component {


  state = {
    username: 'Judy'
  }

  render() {
    return(
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact path='/' render={() => 
                            (<Home/>)}/>
        <Route exact path='/profile' render={() => 
                            (<Profile username={this.state.username}/>)}/>
        <Route exact path='/login' render={() => 
                            (<Login/>)}/>
        <Route exact path='/post' render={() => 
                            (<Post/>)}/>
        
        </Switch>
       </BrowserRouter>
      </div>
    );
  }

}

export default App;
