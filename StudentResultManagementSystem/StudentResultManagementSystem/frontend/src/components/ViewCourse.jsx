import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import './View.css'
import { useNavigate } from 'react-router-dom';


const ViewCourse = () => {
    const [course, setCourse] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/viewcourse')
            .then(response => setCourse(response.data))
            .catch(error => console.error('There was an error fetching the course!', error));
    }, []);


    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            fetch(`http://localhost:3001/deletecourse/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                alert(data);
                setCourse(course.filter(course => course._id !== id));
            })
            .catch(error => console.error('Error:', error));
        }
    };
    
    const handleEdit = (id) => {
        navigate(`/editcourse/${id}`);
    };

    return (
     
      <div>
      <Dashboard/>
      <div className="page-container">
          <h1 id="form-h1">Course List</h1>
          <div className="table-container">
              <table>
                  <thead>
                      <tr>
                          <th>CourseName</th>
                          <th>Courseid</th>
                          <th>Department</th>
                          <th>Year</th>
                          <th>Semester</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {course.map((course) => (
                          <tr key={course._id}>
                              <td>{course.coursename}</td>
                              <td>{course.courseid}</td>
                              <td>{course.department}</td>
                              <td>{course.year}</td>
                              <td>{course.semester}</td>
                            
                              <td>
                                <button onClick={() => handleEdit(course._id)}>Edit</button>
                                <button style={{backgroundColor:'red'}} onClick={() => handleDelete(course._id)}>Delete</button>
                            </td>

                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  </div>
  
    );
};

export default ViewCourse;
