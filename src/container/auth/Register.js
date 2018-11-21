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
            password:'',
            isError:'Your account has been Created successfully.\n You can now login in your account.',
            isLoading:false,
            validate:false,
            emailError:''
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

    }

  
    handleChange = async(e)=> {
        
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value});
           
            console.log("data set on key press!")
      }

   
      shouldComponentUpdate (newProps, newState)  {
          console.log(this.state.email)
        if(this.validateEmail(this.state.email) === false && this.state.email.length >10) 
        {
            newState.emailError = "Your email address is invalid. Please enter a valid address."
            newState.validate = false
        }
        else
        {  
            newState.emailError='';
            newState.validate = false;
        
        }
        return newState
      }
    



         // this.setState({emailError:'Your email address is invalid. Please enter a valid address.'})




      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.email + " name: " + this.state.username + " pass: " + this.state.password);
     
        console.log(base.baseURL)
        this._validateChecking();
        const formdata = new FormData();
        formdata.append('email', this.state.email);
        formdata.append('username', this.state.username);
        formdata.append('password', this.state.password);


        if(this.state.validate === true)
        {
        const data ={
            method: 'POST',
            headers:{
                "Accept":"application/json",
            },
            body: formdata
        }
        const url = base.baseURL + 'auth/register';
       
        fetch(url,data)
        .then(response => response.json())
        .then(datas => console.log(datas))
        .catch(error => console.log(error));
    }

        console.log(this.state.username)
        event.preventDefault();
      }


      validateEmail(email) 
      {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
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

                  {!this.state.isError ? '' :
                    <p className="success-box">{this.state.isError}</p>
                    }


                      <form  onSubmit={this.handleSubmit} className="form">
                           
                              <label htmlFor="email">Email</label>
                              <input type="email" value={this.state.email} onBlur={this.handleChange} onChange={this.handleChange}  name="email" />
                             {!this.state.emailError ? '' :  <span className="warning-box">{this.state.emailError}</span>}

                              <label htmlFor="username">Username</label>
                              <input type="text" value={this.state.username} onBlur={this.handleChange} onChange={this.handleChange} name="username"  />

                              <label htmlFor="password">Password</label>
                              <input type="password" value={this.state.password} onBlur={this.handleChange} onChange={this.handleChange}  maxLength="20" name="password" />
                          
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