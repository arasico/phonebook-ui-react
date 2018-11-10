import React,{Component} from 'react';
import './style.css';


class ListingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                    <input type="text" name="search" placeholder="search . . . " />
                                </div>
                                <div className="search-button">
                                    <span>P</span>
                                </div>
                            </div>
                        </div>
                        <div className="menu-container"></div>
                    </div>
                    <div className=""></div> 
                </div>
            </div>

         </div>
         );
    }
}
 
export default ListingComponent;