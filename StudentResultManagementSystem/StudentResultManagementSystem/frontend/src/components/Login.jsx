import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [designation, setDesignation] = useState('Designation');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/login', { email, password, designation })
            .then(result => {
                console.log(result.data);
                if (result.data === "Success") {
                    console.log("Login Success");
                    alert('Login successful!');
                    if (designation === 'student') {
                        navigate('/studentHome');
                    } else if (designation === 'admin') {
                        navigate('/adminHome');
                    } else {
                        alert('Choose a valid designation');
                    }
                } else {
                    alert(result.data); 
                }
            })
            .catch(err => {
                console.error(err);
                alert('An error occurred. Please try again.');
            });
    }

    const handleRegisterClick = (event) => {
      
        if (designation !== 'admin') {
            event.preventDefault();
            alert("Admin Only Allowed");
        }
    }

    return (
        <div className='background'>
            <header>
                <div className="header-left">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 style={{ color: 'white' }}>Dream College of Engineering</h1>
                    </Link>
                </div>
                <div className="header-right">
                    <label htmlFor="designationSelect" className="form-label">
                        <strong></strong>
                    </label>
                    <select
                        id="designationSelect"
                        className="form-control"
                        value={designation}
                        onChange={(event) => setDesignation(event.target.value)}
                        required
                    >
                        <option value="Designation">Designation</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </header>

            <div>
                <h2>Login</h2>
                <form id="loginform" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong>Email Id</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="exampleInputEmail1"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div>
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

                    <button type="submit" className="btn btn-primary">Login</button>

                    <div className="center-content">
                        <p>Don&apos;t have an account?</p>
                        <Link to='/register' style={{ color: 'white' }} onClick={handleRegisterClick}>
                            <strong>Register</strong>
                        </Link>
                       
                    </div>
                    <div className="center-content"> 
                        <Link to='/forgot' style={{ color: 'white' }} onClick={handleRegisterClick}>
                            <strong>Forgot Password</strong>
                        </Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Login;








