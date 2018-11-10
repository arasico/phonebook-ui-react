import React, { Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';



class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

   

        return ( 
            <div className="container-fluid">
              
              <div className="container">
                    <div className="auth-header">
                        <h1>Login!</h1>
                        <h3>Please login in your Account.</h3>
                        <hr />
                    </div>
                    <div className="auth-form">
                        <form className="form">
                             
                                <label for="username">Username</label>
                                <input type="text" name="username" />

                                <label for="password">Password</label>
                                <input type="password" maxLength="20" name="password" />
                            
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="auth-footer">
                        <p>You don't have account,<span> <NavLink className="sub-navlink" to="/register" >Please sign up.</NavLink> </span></p> 
 
                    </div>
              </div>
            </div>
         );
    }
}
 
export default LoginComponent;