import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard';
import "./Add.css";


const AddStudent = () => {
    const [name, setName] = useState('');
    const [fathername, setFatherName] = useState('');
    const [rollno, setRollNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('None');
    const [year, setYear] = useState('None');
    const [semester, setSemester] = useState('None');
    const [dateofBirth, setDateofBirth] = useState('');
    const [contact, setContact] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        const nameRegex = /^[A-Za-z]+$/;
        const rollnoRegex = /^\d+$/;
        const contactRegex = /^\d{10}$/;

        if (!name || !fathername || !rollno || !email || !password || department === 'None' || year === 'None' || semester === 'None' || !dateofBirth || !contact) {
            alert('Please fill all the details');
            return false;
        }
        if (!nameRegex.test(name)) {
            alert('Name should contain only alphabetic characters');
            return false;
        }
        if (!nameRegex.test(fathername)) {
            alert('Father Name should contain only alphabetic characters');
            return false;
        }
        if (!rollnoRegex.test(rollno)) {
            alert('Register Number should contain only integer values');
            return false;
        }
        if (!contactRegex.test(contact)) {
            alert('Contact should be an integer of exactly 10 digits');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        axios.post('http://localhost:3001/addstudent', {
            name,
            fathername,
            rollno,
            email,
            password,
            department,
            year,
            semester,
            dateofBirth,
            contact
        })
        .then(result => {
            if (result.data === "Student Added Successfully") {
                alert('Submit successful!');
                window.location.reload();
            } else {
                alert('Submission failed. Please try again.');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="page-container">
            <div className="forms-container">
                <Dashboard />
                <form id="forms" onSubmit={handleSubmit}>
                    <p style={{fontSize:"60px"}}> Add Student </p>
                    <div className="forms-group">
                        <label htmlFor="name" className="forms-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="forms-control"
                            id="name"
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="forms-group">
                        <label htmlFor="fathername" className="forms-label"><strong>FatherName</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Father Name"
                            className="forms-control"
                            id="fathername"
                            onChange={(event) => setFatherName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="forms-group">
                        <label htmlFor="rollno" className="forms-label"><strong>RegisterNumber</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Register Number"
                            className="forms-control"
                            id="rollno"
                            onChange={(event) => setRollNo(event.target.value)}
                            required
                        />
                    </div>
    
                   
                        <div className="forms-group">
                            <label htmlFor="department" className="forms-label"><strong>Department</strong></label>
                            <select
                                id="department"
                                className="forms-control"
                                value={department}
                                onChange={(event) => setDepartment(event.target.value)}
                                required
                            >
                                <option value="None">None</option>
                                <option value="CSE">CSE</option>
                                <option value="ECE">ECE</option>
                                <option value="EEE">EEE</option>
                            </select>
                        </div>
                        <div className="forms-group">
                            <label htmlFor="year" className="forms-label"><strong>Year</strong></label>
                            <select
                                id="year"
                                className="forms-control"
                                value={year}
                                onChange={(event) => setYear(event.target.value)}
                                required
                            >
                                <option value="None">None</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                            </select>
                        </div>
                        <div className="forms-group">
                            <label htmlFor="semester" className="forms-label"><strong>Semester</strong></label>
                            <select
                                id="semester"
                                className="forms-control"
                                value={semester}
                                onChange={(event) => setSemester(event.target.value)}
                                required
                            >
                                <option value="None">None</option>
                                <option value="Odd">Odd</option>
                                <option value="Even">Even</option>
                            </select>
                        </div>
             
    
                    <div className="forms-group">
                        <label htmlFor="dateofBirth" className="forms-label"><strong>Date of Birth</strong></label>
                        <input
                            type="date"
                            className="forms-control"
                            id="dateofBirth"
                            onChange={(event) => setDateofBirth(event.target.value)}
                            required
                        />
                    </div>
                    <div className="forms-group">
                        <label htmlFor="email" className="forms-label"><strong>Email Id</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="forms-control"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="forms-group">
                        <label htmlFor="password" className="forms-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="forms-control"
                            id="password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="forms-group">
                        <label htmlFor="contact" className="forms-label"><strong>Contact</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Contact"
                            className="forms-control"
                            id="contact"
                            onChange={(event) => setContact(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submitbutton">Submit</button>
                </form>
            </div>
        </div>
    );
    
}

export default AddStudent;









