import React, { Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

import base from '../../baseurl';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            authorization:'',
            isError:'',
            isLoading:false
          }

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e){
        if(e.target.name === 'email')
            this.setState({email: e.target.value})
        else if(e.target.name === 'password')
            this.setState({password: e.target.value})

            console.log("data set on key press!")
    }


     handleSubmit (e) {

        this.setState({isError:'', isLoading:true})
       console.log(this.state.email.length)

        if(this.state.email.length> 10 && this.state.password >6)
        {
       const formdata = new FormData();
       formdata.append('email',this.state.email)
       formdata.append('password',this.state.password)

        const url= base.baseURL + 'auth/login';
        const data={
                        method:'POST',
                        headers:{
                            Accept:'application/json'
                        },
                        body: formdata
                    }

         fetch(url, data)
        .then(res => res.json())
        .then(data => this.setAuthorization(data) )
        .catch(error => console.log(error));

        }
        else{
            this.setState({
                isError:'Email and Password is required!\n please enter your username and password.',
                isLoading:false
        });
         
        }

        e.preventDefault();
    }

    // set Authorization and check is username and password is true --->
    setAuthorization = (data)=>{
            console.log(data.authorization)
            if(data.authorization!== undefined)
            {
                this.setState({authorization: data.authorization,  isLoading:false})
                console.log(this.state.authorization)

                localStorage.setItem('authorization', this.state.authorization);
                // navigati to listing page  --->
                this.props.history.push('/list');

            }
                else
                {
                this.setState({
                    isError:'Email or Password is wrong! \n Please check your email address and password.',
                    isLoading:false
            })
                console.log('login is failed!')

                }
            
    }
    componentWillMount(){
        let auth =  localStorage.getItem('authorization');
        if(auth === null)
        console.log("Not Login!")
        // else
        // {
        //     this.props.history.push('/list')
        //     console.log (auth)
        // }
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
                    {!this.state.isError ? '' :
                    <p className="error-box">{this.state.isError}</p>
                    }
                        <form  onSubmit={this.handleSubmit} className="form">
                             
                                <label htmlFor="email">Email</label>
                                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />

                                <label htmlFor="password">Password</label>
                                <input type="password" value={this.state.password} onChange={this.handleChange} maxLength="20" name="password" />
                            
                           {this.state.isLoading ?
                             <div   className="button blue-color"  >
                                <div className="loader"></div> 
                             </div>
                             :  
                             <input type="submit" className="blue-color" value="Login" />
                             }

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