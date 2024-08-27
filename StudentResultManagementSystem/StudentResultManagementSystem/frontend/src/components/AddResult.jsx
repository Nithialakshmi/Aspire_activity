import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard';
import "./Add.css";

const AddResult = () => {
    const [rollno, setRollNo] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [courseData, setCourseData] = useState([]);
    const [marksData, setMarksData] = useState({}); 
    const [formVisible, setFormVisible] = useState(true);
    const navigate = useNavigate();

    const validateForm = () => {
        const rollnoRegex = /^\d+$/;
        if (!rollno) {
            alert('Please fill the details');
            return false;
        }
        if (!rollnoRegex.test(rollno)) {
            alert('Register Number should contain only integer values');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        axios.get(`http://localhost:3001/student/${rollno}`)
            .then(response => {
                setStudentData(response.data);

               
                axios.get(`http://localhost:3001/course`, {
                    params: {
                        department: response.data.department,
                        year: response.data.year,
                        semester: response.data.semester
                    }
                })
                .then(courseResponse => {
                    console.log("Course Data:", courseResponse.data); 
                    setCourseData(courseResponse.data);
                    setFormVisible(false); 
                })
                .catch(err => {
                    console.error(err);
                    alert('No course found for the provided details.');
                });
            })
            .catch(err => {
                console.error(err);
                alert('No student found with the provided Register Number.');
            });
    };

    const handleMarksChange = (courseId, event) => {
        const marks = parseInt(event.target.value, 10);
        if (marks >= 0 && marks <= 100) {
            setMarksData({
                ...marksData,
                [courseId]: marks
            });
        } else {
            alert('Marks should be between 0 and 100');
        }
    };

    const handleMarksSubmit = () => {
        
        const resultData = {
            rollno,
            marks: marksData
        };
    
        
        axios.post('http://localhost:3001/add-results', resultData)
            .then(response => {
                console.log(response.data);
                alert('Results submitted successfully!');
                
            })
            .catch(error => {
                console.error('There was an error submitting the results!', error);
                alert('Failed to submit results. Please try again.');
            });
    };

    return (
        <div className="page-container">
            <div className="forms-container">
                <Dashboard />

                {formVisible && (
                    <form id="forms" onSubmit={handleSubmit}>
                        <p style={{ fontSize: "60px" }}> Add Result </p>
                        <div className="forms-group">
                            <label htmlFor="rollno" className="forms-label"><strong>Register Number</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Register Number"
                                className="forms-control"
                                id="rollno"
                                onChange={(event) => setRollNo(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submitbutton">Submit</button>
                    </form>
                )}

                {studentData && (
                    <div id="student-info" style={{ paddingLeft: "18%" }}>
                        <h2 style={{ textAlign: "center", paddingLeft: "10px" }}>Student Information</h2>
                        <table id="student-info-table" style={{ maxWidth: "1120px", alignItems: "center" }}>
                            <thead>
                                <tr>
                                    <th><strong>Register Number</strong></th>
                                    <th><strong>Name</strong></th>
                                    <th><strong>Father's Name</strong></th>
                                    <th><strong>Department</strong></th>
                                    <th><strong>Year</strong></th>
                                    <th><strong>Semester</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{studentData.rollno}</td>
                                    <td>{studentData.name}</td>
                                    <td>{studentData.fathername}</td>
                                    <td>{studentData.department}</td>
                                    <td>{studentData.year}</td>
                                    <td>{studentData.semester}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {courseData.length > 0 && (
                    <div id="course-info" style={{ paddingLeft: "18%", marginTop: "20px" }}>
                        <h2 style={{ textAlign: "center", paddingLeft: "10px" }}>Course Information</h2>
                        <table id="course-info-table" style={{ maxWidth: "1120px", alignItems: "center" }}>
                            <thead>
                                <tr>
                                    <th><strong>Course ID</strong></th>
                                    <th><strong>Course Name</strong></th>
                                    <th><strong>Marks</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((course, index) => (
                                    <tr key={index}>
                                        <td>{course.courseid}</td>
                                        <td>{course.coursename}</td>
                                        <td>
                                            <input
                                                type="number"
                                                placeholder="Enter Marks"
                                                min="0"
                                                max="100"
                                                value={marksData[course.courseid] || ''}
                                                onChange={(event) => handleMarksChange(course.courseid, event)}
                                                style={{ width: "100px" }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button 
                            className="submitbutton" 
                            onClick={handleMarksSubmit} 
                            style={{ marginTop: "20px" }}>
                            Submit Marks
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddResult;
