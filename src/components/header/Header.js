import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <div className="header-container">
                <div className="logo-container">
                    <p>Logo . . .</p>
                </div>
                <div className="menu-container">
                    <p>Menu . . . . . . . . . . .. .</p>
                </div>
             </div>

         );
    }
}
 
export default Header;