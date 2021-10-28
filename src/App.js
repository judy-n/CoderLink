import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Profile from './views/profilePage/index';
import Home from './views/homePage/homePage';

class App extends React.Component {
  render() {
    return(
      <div>
        <BrowserRouter>
        <Route exact path='/' render={() => 
                            (<Home/>)}/>
            <Route exact path='/profile' render={() => 
                            (<Profile appState={this.state}/>)}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
