import React,{Component } from 'react'

export default class Wish extends Component{

    constructor(props){
        super(props)
        this.state={
            username:"Naveen"
            // Address:"Chennai" ,  {this.state.Address}
        }
    }
    ChangeName(event)
    {
        this.setState({
            username:event.target.value
        })
    }
    render(){
        return(
            <div>Wish
                <h1>Hi{this.state.username} Welcome </h1>
            
 Enter your UserName:<input type='text' name='username' value={this.state.username}
 onChange={(event)=>this.ChangeName(event)}/> 
           </div>
        )
    }
}