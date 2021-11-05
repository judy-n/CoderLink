import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Profile from './views/profilePage/index';
import Home from './views/Home';
import Login from './views/Login'
import Post from './views/posts/index';
import Portfolio from './views/Portfolio';

class App extends React.Component {


  state = {
  }

  render() {
    return(
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact path='/' render={() => 
                            (<Home/>)}/>
        <Route exact path='/profile' render={() => 
                            (<Profile/>)}/>
        <Route exact path='/login' render={() => 
                            (<Login/>)}/>
        <Route exact path='/post' render={() => 
                            (<Post/>)}/>
        
        <Route exact path='/portfolio' render={() => 
                            (<Portfolio/>)}/>
        </Switch>
       </BrowserRouter>
      </div>
    );
  }

}

export default App;
