import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

import './Header.css';

class HeaderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                <NavLink to="/login" className="navLink ">  Log Out </NavLink>
                            </li>
                         
                        </ul>
                </div>
             </div>

         );
    }
}
 
export default HeaderLogin;