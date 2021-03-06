import React, { Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

import base from '../../baseurl';

 const initialState = {
    username:'',
    email:'',
    password:'',
    usernameError:'',
    emailError:'',
    passwordError:'',
    isError:'',
    isLoading:false,
    validate:false,
    statusCode:0
 
 }

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
         this.state =  initialState


         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

    }

  
    handleChange = async(e)=> {
        
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]:value});
           
            console.log("data set on key press!")
      }

      validate = async(e) =>{

        if(this.validateEmail(this.state.email) === false && this.state.email.length >2) 
            this.setState({validate : false, emailError : "Your email address is invalid. Please enter a valid address."})
        else  
            this.setState({emailError : '',validate : true}) 
        

        if(this.state.username.length < 5 && this.state.username !== '')
            this.setState({validate : false, usernameError : "Usernames must be at least 5 characters long!"})
        else  
            this.setState({usernameError : '', validate : true}) 
        

        if(this.state.password.length < 5 && this.state.password !== '')
            this.setState({validate : false, passwordError : "Password must be at least 5 characters long!"})
        else  
            this.setState({passwordError : '', validate : true}) 
        

        return false;
      }

   
    //   shouldComponentUpdate (newProps, newState)  {
    //       console.log(this.state.email)
    //     if(this.validateEmail(this.state.email) === false && this.state.email.length >10) 
    //     {
    //         newState.emailError = "Your email address is invalid. Please enter a valid address."
    //         newState.validate = false
    //     }
    //     else
    //     {  
    //         newState.emailError='';
    //         newState.validate = false;
        
    //     }

    //     if(this.state.username.length < 5 && this.state.username !== '')
    //     {
    //         newState.usernameError = "Usernames must be at least 5 characters long!"
    //         newState.validate = false
    //     }
    //     else
    //     {  
    //         newState.usernameError='';
    //         newState.validate = false;
        
    //     }
    //     return newState
    //   }
    



 
      handleSubmit= async(event) => {
        
        event.preventDefault();
        
        console.log(this.state.validate)
        if(this.state.validate === true) {

        console.log(this.state)
        // console.log(base.baseURL) 
        const formdata = new FormData();
        formdata.append('email', this.state.email);
        formdata.append('username', this.state.username);
        formdata.append('password', this.state.password);


      
        const data ={
            method: 'POST',
            headers:{
                "Accept":"application/json",
            },
            body: formdata
        }
        const url = base.baseURL + 'auth/register';
       
       await fetch(url,data)
        .then(response => {
            response.json() 
            console.log(response)
            console.log(response.status)
            this.setState({statusCode:response.status})
            console.log(this.state.statusCode)
        })
        .catch(error => console.log(error));

        console.log(this.state.statusCode + "wwww")
            if(this.state.statusCode === 201){
            // clear forms
            
             this.setState({ isSuccess:'Your account has been Created successfully.\n You can now login in your account.'}) 
             this.setState(initialState)
             console.log("sucsessful")
            }
            else if(this.state.statusCode === 401){
                this.setState({ isError:'Email address is alredy!'}) 
            }
        }
        else{
            console.log("somethign is worng")
            
        }
       
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
                        <p className="error-box">{this.state.isError}</p>
                    }

                     {!this.state.isSuccess ? '' :
                        <p className="success-box">{this.state.isSuccess}</p>
                    }


                      <form  onSubmit={this.handleSubmit} className="form">
                           
                              <label htmlFor="email">Email</label>
                              <input 
                                type="email"
                                value={this.state.email} 
                                onBlur={this.validate} 
                                onChange={this.handleChange}  
                                name="email" />

                              {/* Error handeling  */}
                              {!this.state.emailError ? '' :  <span className="warning-box">{this.state.emailError}</span>}

                              <label htmlFor="username">Username</label>
                              <input 
                                type="text" 
                                value={this.state.username} 
                                onBlur={this.validate} 
                                onChange={this.handleChange} 
                                name="username"  />

                              {/* Error handeling  */}
                              {!this.state.usernameError ? '' :  <span className="warning-box">{this.state.usernameError}</span>}

                              <label htmlFor="password">Password</label>
                              <input 
                                type="password" 
                                value={this.state.password} 
                                onBlur={this.validate} 
                                onChange={this.handleChange}  
                                maxLength="20" 
                                name="password" />

                              {/* Error handeling  */}
                              {!this.state.passwordError ? '' :  <span className="warning-box">{this.state.passwordError}</span>}

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