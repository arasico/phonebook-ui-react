import React , {Component} from 'react';



class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:{val:'', err:''},

         }
         this.handleSubmit= this.handleSubmit.bind(this);
    }


    handleSubmit  (e) {
         this.setState({username:{val:'wwwww',error:'error is fixed'}})

        

        e.preventDefault();
    }

    shouldComponentUpdate (newProps, newState)  {
        console.log(newState.username.val)
        console.log(newState.username.error)
        return newState
    }
    render() { 
        return ( 

            <div>
             <form onSubmit={this.handleSubmit} >
                <p>Text Component</p>
                <input type="submit" className="blue-color"  value="Sign Up" />
             </form>
            </div>
         );
    }
}
 
export default Test;