import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard';
import "./Add.css";

const AddCourse = () => {
    const [coursename, setCourseName] = useState('');
    const [courseid, setCourseId] = useState('');
    const [department, setDepartment] = useState('None');
    const [year, setYear] = useState('None');
    const [semester, setSemester] = useState('None');
    



    const validateForm = () => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const rollnoRegex = /^[A-Za-z0-9]+$/;
       

        if (!coursename || !courseid  || department === 'None' || year === 'None' || semester === 'None' ) {
            alert('Please fill all the details');
            return false;
        }
        if (!nameRegex.test(coursename)) {
            alert('Name should contain only characters');
            return false;
        }
       
        if (!rollnoRegex.test(courseid)) {
            alert('Courseid should contain both characters and integer');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        axios.post('http://localhost:3001/addcourse', {
           courseid,
           coursename,
            department,
            year,
            semester,
            
        })
        .then(result => {
            if (result.data === "Course Added Successfully") {
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
                  
                    <p style={{fontSize:"60px"}}> Add Course </p>
                    <div className="forms-group">
                        <label htmlFor="coursename" className="forms-label"><strong>CourseName</strong></label>
                        <input
                            type="text"
                            placeholder="Enter coursename"
                            className="forms-control"
                            id="coursenamee"
                            onChange={(event) => setCourseName(event.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="forms-group">
                        <label htmlFor="courseid" className="forms-label"><strong>CourseId</strong></label>
                        <input
                            type="text"
                            placeholder="Enter courseid"
                            className="forms-control"
                            id="courseid"
                            onChange={(event) => setCourseId(event.target.value)}
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
    
}

export default AddCourse;
