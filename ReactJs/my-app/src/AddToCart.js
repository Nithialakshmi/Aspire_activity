import React,{Component} from 'react'
import HoC from './ModifiesComponent'


export class AddToCart extends Component{
  
    render()
    {
        return(
            <div><h1 style={{color:"Red"}}> AddToCart </h1> 
                <button onClick={this.props.incrementCounter}> Counter: {this.props.count}</button>
            </div>
        )  
    }
}
export default HoC(AddToCart)