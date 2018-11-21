import React, { Component } from 'react';
import logo from '../../logo.svg';

import './Header.css';

class HeaderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {Token:''  }
        this._callLogout = this._callLogout.bind(this)
    }

    _callLogout = async() => {
       await this.setState({Token:'null'})
        localStorage.setItem('authorization',this.state.Token)
        console.log("Log out")
        console.log(localStorage.getItem('authorization'))
        window.location.reload(); 
    }
 
    
  

    render() { 
        return ( 
             <div className="header-container">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>My Phone Book</span>
                </div>
                <div className="menu-container">
                    <ul className="ulLink">
                            <div>
                                <button className="btn-logout"  onClick = {this._callLogout}>Logout</button>
                            </div>
                         
                        </ul>
                </div>
             </div>

         );
    }
}
 
export default HeaderLogin;