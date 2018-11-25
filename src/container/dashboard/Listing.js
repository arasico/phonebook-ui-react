import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

import IconAdd from '../../assets/icons/add.svg';
import IconSearch from '../../assets/icons/search.svg';

import Token from '../../token';
import base from '../../baseurl';


class ListingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { dataForm:'' }
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            alert("key pressed!")
        }
    }
    _callSearch(){
        alert(Token)
    }

    componentWillMount = async()=>  {

        if(localStorage.getItem('authorization') === 'null')
        this.props.history.push('/');
       
        console.log(localStorage.getItem('authorization'))
   

        console.log("listing is start . . .");

        const data={
            method:'GET',
            headers:{
                Accept:'application/json',
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmZhNzY1ZTliZDI5ODAxMzM3ZjA2ZGEiLCJlbWFpbCI6ImFyYXMuYXJtYW5pMjAxNEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFyYXNpY28ifQ.ODs8rUBAP7W9TeQoACuHG1WXGj-3R2L0fzn5TCHgnY8"
            }
        }


        // let cors = 'https://cors-anywhere.herokuapp.com/';  
        // const url = cors + base.baseURL + 'contact';
        // console.log(Token)

        // fetch(url,data)
        // .then((response) => response.json())
        // .then((responseJson) => {

        //    console.log(responseJson) 
        // })
        // .catch((error) => {
        //   console.log(error);
        // })

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
         await  fetch('/api/v1/contact' ,data)
        .then(response => response.json())
        .then(json => console.log(json))

    }

 
    
    render() { 

        // when list is empty show this Dialog box ----->
      const EmptyData = (
                            <div className="emptydata-container">
                                <p>You don't have any contact in your account!</p>
                                <div className="button w50 blue-color" onClick={()=> this.props.history.push('/insert')}>
                                    <p>Add your first contact</p>
                                </div>
                            </div>
                        );


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
                    <div className="">
                    {EmptyData}
                    </div> 
                </div>
            
            </div>

         </div>
         );
    }
}
 
export default ListingComponent;