import React, { Component } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Token from './token';

import HeaderLogout from './components/header/Header';
import HeaderLogin from './components/header/HeaderLogin';
import Login from './container/auth/Login';
import Register from './container/auth/Register';
import List from './container/dashboard/Listing';
import Insert from './container/dashboard/Insert';
import Test from './container/test';
 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {   } 
} 


  componentWillMount(){
    console.log(typeof(Token))
  }
 

  render() {


    return (
      <Router>
          <div className="App">
          {Token === 'null' ? <HeaderLogout /> :  <HeaderLogin />  }
          {/* <HeaderLogin /> */}
           
            <Switch>
                  <Route exact init path="/" component={Login} />
                  <Route path="/register" component={Register} /> 
                  <Route path="/list" component={List} /> 
                  <Route path="/insert" component={Insert} /> 
                  <Route path="/test" component={Test} /> 
            </Switch>
                
          </div>
      </Router>
    );
  }
}

export default App;
