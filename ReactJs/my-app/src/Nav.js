import React,{Component} from 'react'
import { Link } from 'react-router-dom'


export class Nav extends Component{
    render()
    {
        return(
            <div>
                <nav> 
                <Link to='home'><li>Home</li></Link>
                <Link to='contactus'><li>ContactUs</li></Link>
                <Link to='product'><li>Product</li></Link>
                </nav>
            </div>
        )
    }
}

export default Nav