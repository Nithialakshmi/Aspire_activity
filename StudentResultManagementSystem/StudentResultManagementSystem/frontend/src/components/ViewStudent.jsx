import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import './View.css'
import { useNavigate } from 'react-router-dom';

const ViewStudent = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/viewstudent')
            .then(response => setStudents(response.data))
            .catch(error => console.error('There was an error fetching the students!', error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            fetch(`http://localhost:3001/deletestudent/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                alert(data);
                setStudents(students.filter(student => student._id !== id));
            })
            .catch(error => console.error('Error:', error));
        }
    };
    
    const handleEdit = (id) => {
        navigate(`/editstudent/${id}`);
    };
     

    return (
     
      <div>
      <Dashboard/>
      <div className="page-container">
          <h1 id="form-h1">Student List</h1>
          <div className="table-container">
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Father's Name</th>
                          <th>Roll No</th>
                          <th>Department</th>
                          <th>Year</th>
                          <th>Semester</th>
                          <th>Email</th>
                          <th>Date of Birth</th>
                          <th>Contact</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {students.map((student) => (
                          <tr key={student._id}>
                              <td>{student.name}</td>
                              <td>{student.fathername}</td>
                              <td>{student.rollno}</td>
                              <td>{student.department}</td>
                              <td>{student.year}</td>
                              <td>{student.semester}</td>
                              <td>{student.email}</td>
                              <td>{new Date(student.dateofBirth).toLocaleDateString()}</td>
                              <td>{student.contact}</td>
                          
                              <td>
                                <button  onClick={() => handleEdit(student._id)}>Edit</button>
                                <button style={{backgroundColor:'red'}}
                                onClick={() => handleDelete(student._id)}>Delete</button>
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

export default ViewStudent;
