import React, { Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';


class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
              
            <div className="container">
                  <div className="auth-header">
                      <h1>Sign Up!</h1>
                      <h3>You don't have a account , Please sign up in my phonebook.</h3>
                      <hr />
                  </div>
                  <div className="auth-form">
                      <form className="form">
                           
                              <label for="email">Email</label>
                              <input type="text" name="email" />

                              <label for="username">Username</label>
                              <input type="text" name="username" />

                              <label for="password">Password</label>
                              <input type="password" maxLength="20" name="password" />
                          
                          <input type="submit" value="Sign Up" />
                      </form>
                  </div>
                  <div className="auth-footer">
                      <p>Do you have account, Please <span> <NavLink className="sub-navlink" to="/login" >Login </NavLink> in your account. </span></p> 

                  </div>
            </div>
          </div>
         );
    }
}
 
export default RegisterComponent;