import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Forgot = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

        
        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        axios.post('http://localhost:3001/forgot-password', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    alert("Password changed successfully!");
                    navigate('/login');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div >
            <div className='background'>
                <div>
                    <h2>Forgot Password</h2>
                    <form id="loginform" onSubmit={handleSubmit}>
                        <div className="form-label">
                            <label htmlFor="exampleInputName" className="form-label">
                                <strong>Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputName"
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
                                <strong>New Password</strong>
                            </label>
                            <input 
                                type="password"
                                placeholder="Enter New Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-label">
                            <label htmlFor="exampleInputPassword2" className="form-label">
                                <strong>Confirm Password</strong>
                            </label>
                            <input 
                                type="password"
                                placeholder="Confirm New Password"
                                className="form-control"
                                id="exampleInputPassword2"
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Change Password</button>
                        <div className="center-content"> 
                            <p>Already have an account?</p>
                            <Link to='/login' style={{color:'white'}}><strong> Login </strong></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Forgot;
