import React, { Component } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Login from './container/auth/Login';
import Register from './container/auth/Register';
import List from './container/dashboard/Listing';
 
class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Header />
            <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route path="/register" component={Register} /> 
                  <Route path="/list" component={List} /> 
            </Switch>
                
          </div>
      </Router>
    );
  }
}

export default App;
