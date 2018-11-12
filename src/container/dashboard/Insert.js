import React,{ Component } from 'react';
import './style.css';


class InsertComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div>
          <div className="container">
                <div className="container-inser">
                    <div className="insert-header">
                            <div className="box-header">
                                <p>Add New Contact</p>
                            </div>
                            
                            <div className="box-header flex-end">
                                <button className="button-add">View Contact</button>
                            </div>

                            <hr className="hr-silver" />
                    </div>
             
                </div>
          </div>
        </div>
        
        );
    }
}
 
export default InsertComponent;
