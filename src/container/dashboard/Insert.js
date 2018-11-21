import React,{ Component } from 'react'; 

import ReactDropzone from "react-dropzone"; 

//
//
import './style.css';
import Attach from '../../assets/icons/attachment.svg';




 
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: '100%',
    height: '100%',
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF'
  }
  
  const img = {
    display: 'block', 
    height: '100%',
    textAlign: 'center',
    margin: 'auto',
  };



class InsertComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            files: [],
         }
    }

  
    onDrop(files) {
        this.setState({
          files: files.map(file => ({
            ...file,
            preview: URL.createObjectURL(file)
          }))
        });
      }
    
    //   componentWillUnmount() {
    //     // Make sure to revoke the data uris to avoid memory leaks
    //     const {files} = this.state;
    //     for (let i = files.length; i >= 0; i--) {
    //       const file = files[0];
    //       URL.revokeObjectURL(file.preview);
    //     }
    //   }


    _callSubmit(){
        alert("Submited!");
    }

    render() { 

  


          const {files} = this.state;

          const thumbs = files.map((file, index) => (
            <div key={index} style={thumb}>
              <div style={thumbInner}>
                <img
                  src={file.preview}
                  style={img}
                  alt={"Privew"}
                />
              </div>
            </div>
          ));
 

          

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
                                <label htmlFor="name">Name</label>
                                <input  type="text" name="name" />

                                <label htmlFor="Email">Email</label>
                                <input  type="text" name="email" />

                                <label htmlFor="mobile">Mobile</label>
                                <input  type="text" name="mobile" />

                                <label htmlFor="phone">Phone Number</label>
                                <input  type="text" name="phone" />

                                <label htmlFor="address">Address</label>
                                <input  type="text" name="address" />

                                <div className="btn-container">
                                    <div className="btn-part">
                                        <input  type="submit" value="Back"    />
                                    </div>
                                    <div className="btn-part">
                                        <input  type="submit" value="Add contact" onClick={this._callSubmit} className="blue-color" />
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                        <div className="box-form">
                            <div className="box-image">

                         
                            <ReactDropzone
                            accept="image/*"
                            // onDrop={this.onDrop}
                            onDrop={this.onDrop.bind(this)}
                            className="app" 
                            >
                               {thumbs}
                               {this.state.files.length > 0 ||
                                 
                                <div>
                                    <img src={Attach} className="attach-img"  alt="logo" />
                                    <p>Drag and Drop or click here for upload photo</p>
                                </div>
                               }  
                              
                             
                              
                             
                            </ReactDropzone>
                      

                        

                            </div>
                        </div>
                    </div>
             
                </div>
          </div>
        </div>
        
        );
    }
}
 
 


export default InsertComponent;
