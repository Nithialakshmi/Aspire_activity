import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailLowerCase = email.toLowerCase();
        const atSymbolCount = emailLowerCase.split('@').length - 1;
        if (atSymbolCount !== 1) {
            alert("Email must contain exactly one '@' symbol.");
            return;
        }

        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (!passwordRegex.test(password)) {
            alert("Password must contain at least one uppercase letter, one lowercase letter, and one special character.");
            return;
        }
        
        axios.post( 'http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div >
            <div className='background' >
                <div >
                    <h2 >Register</h2>
                    <form id="loginform" onSubmit={handleSubmit} style={{color:"black"}}>
                        <div className="form-label">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="form-label">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value.toLowerCase())}
                                required
                            /> 
                        </div>
                        <div className="form-label">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>

                        <div  className="center-content" > 
                    <p >Already have an account ?</p>
                    <Link to='/login' style={{color:'white'}}> <strong> Login </strong> </Link> </div>
              

                    </form>

                     </div>
            </div>
        </div>
    )
}

export default Register