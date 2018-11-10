import React, { Component} from 'react';
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
                    </div>
                    <div className="auth-form"></div>
                    <div className="auth-footer"></div>
              </div>
            </div>
         );
    }
}
 
export default LoginComponent;