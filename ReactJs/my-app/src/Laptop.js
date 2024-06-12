import React,{Component} from 'react'
import{Link} from 'react-router-dom'

export class Laptop extends Component{
    render(){
        return(
            <div>
                <h1 style={{color:'Green'}}>List of all Laptop brands</h1>
                <Link to ='/product/laptop'>View all the Laptop Brands</Link>
            <ol>
                <li>Intel</li>
                <li>HP</li>
                <li>Acer</li>
                <li>Sony</li>
                <li>Dell</li>
                <li>Toshiba</li>
            </ol>
            </div>


        )
    }
}

export default Laptop