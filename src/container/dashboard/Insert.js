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

                    <div className="container-form">
                        <div className="box-form">
                            <div className="form-insert">
                                <label for="name">Name</label>
                                <input  type="text" name="name" />

                                <label for="Email">Email</label>
                                <input  type="text" name="email" />

                                <label for="mobile">Mobile</label>
                                <input  type="text" name="mobile" />

                                <label for="phone">Phone Number</label>
                                <input  type="text" name="phone" />

                                <label for="address">Address</label>
                                <input  type="text" name="address" />

                            </div>
                        </div>
                        <div className="box-form">
                            <div className="box-image"></div>
                        </div>
                    </div>
             
                </div>
          </div>
        </div>
        
        );
    }
}
 
export default InsertComponent;
