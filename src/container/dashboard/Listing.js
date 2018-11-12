import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

import IconAdd from '../../assets/icons/add.svg';
import IconSearch from '../../assets/icons/search.svg';



class ListingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            alert("key pressed!")
        }
    }
    _callSearch(){
        alert("this is called from searc ")
    }
    render() { 
        return ( 

         <div>
            <div className="container">
                <div className="list-container">
                    <div className="list-header">
                        <div className="search-container">
                            <div className="search-box">
                                <div className="search-input">
                                    <input type="text" name="search" placeholder="search . . . " onKeyPress={this.enterPressed} />
                                </div>
                                <button className="search-button" type="submit" onClick={this._callSearch} >
                                    <span> <img src={IconSearch} className="Serch-Icon" alt="Search Contact"/> </span>
                                </button>
                            </div>
                        </div>
                        <div className="menubutton-container">
                            <NavLink to="/insert" >
                                <div className="button-box">
                                    <div>
                                    <img src={IconAdd} className="Add-Icon" alt="Add New"/>    
                                    </div> <p> Add New Contact</p>
                                </div>
                            </NavLink>
                        </div>
                        
                    </div>
                    <hr className="hr-silver" />
                    <div className=""></div> 
                </div>
            </div>

         </div>
         );
    }
}
 
export default ListingComponent;