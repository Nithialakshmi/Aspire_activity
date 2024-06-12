import React,{Component} from 'react'
import { Link } from 'react-router-dom'


export class ContactUs extends Component{
    render()
    {
        return(
            <div>
                <h1 style={{color:'orange'}}> ContactUs</h1>
                <Link to='home'><li>Home</li></Link>
                <Link to='contactus'><li>ContactUs</li></Link>
                <Link to='product'><li>Product</li></Link>
            </div>
        )
    }
}

export default ContactUs