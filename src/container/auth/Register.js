import React, { Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

import base from '../../baseurl';

 

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            email:'',
            password:''
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {
        
        if(e.target.name === 'email')
            this.setState({email: e.target.value});
        else if(e.target.name === 'username')
            this.setState({username: e.target.value});
        else if(e.target.name === 'password')
            this.setState({password: e.target.value});
   
      }

      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.email + " name: " + this.state.username + " pass: " + this.state.password);
console.log(base.baseURL)
        
        console.log(this.state.username)
        event.preventDefault();
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
                      <form  onSubmit={this.handleSubmit} className="form">
                           
                              <label htmlFor="email">Email</label>
                              <input type="email" value={this.state.email} onChange={this.handleChange}  name="email" />

                              <label htmlFor="username">Username</label>
                              <input type="text" value={this.state.username} onChange={this.handleChange} name="username"  />

                              <label htmlFor="password">Password</label>
                              <input type="password" value={this.state.password} onChange={this.handleChange}  maxLength="20" name="password" />
                          
                          <input type="submit" className="blue-color"  value="Sign Up" />
                      </form>
                  </div>
                  <div className="auth-footer ">
                      <p>Do you have account, Please <span> <NavLink className="sub-navlink" to="/login" >Login </NavLink> in your account. </span></p> 

                  </div>
            </div>
          </div>
         );
    }
}
 
export default RegisterComponent;