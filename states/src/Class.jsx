import React, {Component} from 'react';

export default class Profile extends Component{
    constructor(){
        super();
        this.state = {
            name : "John ",
            count : 0,
            age : "12"
        }
    }
 
    render(){
        const change = () =>{
            this.setState({name :"David", age : "40"})
           
        }
      
        return(
            <div>
                <h1> This is Class Component</h1>
                <h2>{this.state.name}</h2>
                <h2> {this.state.age}</h2>
                <button onClick={change}> Change Name</button>
                {/* <h2> You Click this button {this.state.count} times</h2> */}
                

            </div>
        )
    }
    
}

