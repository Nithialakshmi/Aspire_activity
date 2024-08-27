import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

import "./Add.css";

const StudentHome = () => {
    const [rollno, setRollNo] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [courseData, setCourseData] = useState([]);
    const [resultData, setResultData] = useState(null);
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
                    setCourseData(courseResponse.data);

                    
                    axios.get(`http://localhost:3001/result/${rollno}`)
                        .then(resultResponse => {
                            setResultData(resultResponse.data.marks);
                            setFormVisible(false); 
                        })
                        .catch(err => {
                            console.error(err);
                            alert('No results found for the provided Register Number.');
                        });
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

    return (
        <div className="page-container">
          <header> 
          <div className="header-left">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 style={{ color: 'white' }}>Dream College of Engineering</h1>
                    </Link>
                </div>
                <div className="header-right">
                <Link to='/login' style={{color:"white"}}>Logout</Link> 
                </div>
                </header>
              

            <div className="forms-container">
                {formVisible && (
                    <form id="forms" onSubmit={handleSubmit}>
                        <p style={{ fontSize: "60px", margin:"20px"}}> RESULT </p>
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
                    <div id="student-info" style={{ paddingLeft: "10%" }}>
                        <h2 style={{ textAlign: "center", paddingLeft: "5px", paddingBottom:"50px", paddingTop:"50px" }}>Dream College of Engineering</h2>
                        <table id="student-info-table" style={{ maxWidth: "1120px", alignItems: "center" }}>
                            <thead>
                                <tr>
                                    <th><strong>Register Number</strong></th>
                                    <th><strong>Name</strong></th>
                                    <th><strong>Father's Name</strong></th>
                                    <th><strong>Department</strong></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{studentData.rollno}</td>
                                    <td>{studentData.name}</td>
                                    <td>{studentData.fathername}</td>
                                    <td>{studentData.department}</td>
                                  
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {courseData.length > 0 && (
                    <div id="course-info" style={{ paddingLeft: "10%", marginTop: "20px" }}>
                        <h2 style={{ textAlign: "center", paddingLeft: "5px", paddingBottom:"5px" }}></h2>
  <table id="course-info-table" style={{ maxWidth: "1120px", alignItems: "center" }}>
    <thead>
        <tr>
            <th><strong>Year</strong></th>
            <th><strong>Semester</strong></th>
            <th><strong>Course ID</strong></th>
            <th><strong>Course Name</strong></th>
           
            <th><strong>Grade</strong></th>
            <th><strong>Result</strong></th>
           
           
        </tr>
    </thead>
    <tbody>
        {courseData.map((course, index) => {
            const marks = resultData && resultData[course.courseid] ? resultData[course.courseid] : 'N/A';
            const result = marks !== 'N/A' && marks >= 40 ? 'Pass' : 'Fail';
            let grade = 'No Grade';

            if (marks !== 'N/A') {
                if (marks >= 80) grade = 'O';
                else if (marks >= 70) grade = 'A+';
                else if (marks >= 60) grade = 'A';
                else if (marks >= 50) grade = 'B+';
                else if (marks >= 40) grade = 'B';
            }

            return (
                <tr key={index}>
                    <td>{course.year}</td>
                    <td>{course.semester}</td>
                    <td>{course.courseid}</td>
                    <td>{course.coursename}</td>
                  
                    <td>{result === 'Fail' ? 'No Grade' : grade}</td>
                    <td>{result}</td>
                    
                  
                </tr>
            );
        })}


{/* <tr>
            <td colSpan="5"><strong>Cumulative Grade Point Average (CGPA)Percentage</strong></td>
            <td>
                {(() => {
                    const totalMarks = courseData.reduce((acc, course) => {
                        const marks = resultData && resultData[course.courseid] ? resultData[course.courseid] : 0;
                        return acc + (marks !== 'N/A' ? marks : 0);
                    }, 0);

                    const maxMarks = courseData.length * 100;
                    return totalMarks ? ((totalMarks / maxMarks) * 100).toFixed(2) + '%' : '-';
                })()}
            </td>
        </tr> */}


        <tr>
    <td colSpan="5"><strong>Cumulative Grade Point Average (CGPA)</strong></td>
    <td>
        {(() => {
            const totalMarks = courseData.reduce((acc, course) => {
                const marks = resultData && resultData[course.courseid] ? resultData[course.courseid] : 0;
                return acc + (marks !== 'N/A' ? marks : 0);
            }, 0);

            const maxMarks = courseData.length * 100;
            const percentage = totalMarks ? (totalMarks / maxMarks) * 100 : 0;
            const cgpa = percentage ? (percentage / 10).toFixed(2) : '-';

            return cgpa;
        })()}
    </td>
</tr>



    
        {/* <tr>
            <td colSpan="5"><strong>Cumulative Grade Point Average (CGPA)</strong></td>
            <td>
                {(() => {
                    const totalMarks = courseData.reduce((acc, course) => {
                        const marks = resultData && resultData[course.courseid] ? resultData[course.courseid] : 0;
                        return acc + (marks !== 'N/A' ? marks : 0);
                    }, 0);

                    const maxMarks = courseData.length * 100;
                    const percentage = totalMarks ? (totalMarks / maxMarks) * 100 : 0;

                    let totalGrade = 'No Grade';
                    if (percentage >= 80) totalGrade = 'O';
                    else if (percentage >= 70) totalGrade = 'A+';
                    else if (percentage >= 60) totalGrade = 'A';
                    else if (percentage >= 50) totalGrade = 'B+';
                    else if (percentage >= 40) totalGrade = 'B';

                    return totalMarks ? totalGrade : '-';
                })()}
            </td>
        </tr> */}
    </tbody>
</table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudentHome;
