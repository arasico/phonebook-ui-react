import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {Token:''  }
        this._callLogout = this._callLogout.bind(this)
    }

 

    _callLogout = async()=> {
       await this.setState({Token:'login'})
        localStorage.setItem('authorization',this.state.Token)
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
                            <li className="nav-link-li">
                                <NavLink to="/login" className="navLink ">  Login </NavLink>
                            </li>
                            <li className="nav-link-li" >
                                <span style={{color:'#fff'}}>|</span>
                            </li>
                            <li className="nav-link-li" >
                                <NavLink to="/register" className="navLink " >  Register </NavLink>
                            </li>
                        </ul>

                          <button   onClick = {this._callLogout}>Login</button>
                </div>
             </div>

         );
    }
}
 
export default Header;