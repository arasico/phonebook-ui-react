import React , {Component} from 'react';



class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
                users:[
                    {name:'aras',err:''},
                    {name:'yas',err:''}
                ]
        
        }
            
 
         this.handleSubmit= this.handleSubmit.bind(this);
    }


    handleSubmit  (e) {
    
            const newstatew = this.state.users.map((user) => {
                const TempUser = user;
                TempUser.err = '10';
                return TempUser
            })
            this.setState({newstatew})

           

        e.preventDefault();
    }

    shouldComponentUpdate (newProps, newState)  {
        console.log(newState.users)  
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