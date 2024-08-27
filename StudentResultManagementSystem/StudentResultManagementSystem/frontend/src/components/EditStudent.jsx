import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [student, setStudent] = useState({
        name: '',
        fathername: '',
        rollno: '',
        department: '',
        year: '',
        semester: '',
        dateofBirth: '',
        email: '',
        password: '',
        contact: ''
    });
    const [editableFields, setEditableFields] = useState({
        name: true,
        fathername: true,
        rollno: true,
        department: true,
        year: true,
        semester: true,
        dateofBirth: true,
        email: true,
        password: true,
        contact: true
    });

    useEffect(() => {
        fetch(`http://localhost:3001/viewstudent/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setStudent(data);
            })
            .catch(error => console.error('Error fetching student data:', error));
    }, [id]);
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3001/editstudent/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Updated data:", data);
                navigate(`/viewstudent`);
            })
            .catch(error => console.error('Error updating student data:', error));
    };

    return (
        <div>
            <form id="forms" onSubmit={handleSubmit}>
                <h2>Edit Student</h2>
                <div className="forms-group">
                    <label htmlFor="name" className="forms-label"><strong>Name</strong></label>
                    <input
                        type="text"
                        className="forms-control"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        disabled={!editableFields.name}
                        required
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="fathername" className="forms-label"><strong>Father Name</strong></label>
                    <input
                        type="text"
                        className="forms-control"
                        name="fathername"
                        value={student.fathername}
                        onChange={handleChange}
                        disabled={!editableFields.fathername}
                        required
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="rollno" className="forms-label"><strong>Register Number</strong></label>
                    <input
                        type="text"
                        className="forms-control"
                        name="rollno"
                        value={student.rollno}
                        onChange={handleChange}
                        disabled={!editableFields.rollno}
                        required
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="department" className="forms-label"><strong>Department</strong></label>
                    <select
                        name="department"
                        className="forms-control"
                        value={student.department}
                        onChange={handleChange}
                        disabled={!editableFields.department}
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
                        name="year"
                        className="forms-control"
                        value={student.year}
                        onChange={handleChange}
                        disabled={!editableFields.year}
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
                        name="semester"
                        className="forms-control"
                        value={student.semester}
                        onChange={handleChange}
                        disabled={!editableFields.semester}
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
                        name="dateofBirth"
                        value={student.dateofBirth}
                        onChange={handleChange}
                        disabled={!editableFields.dateofBirth}
                        required
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="email" className="forms-label"><strong>Email Id</strong></label>
                    <input
                        type="email"
                        className="forms-control"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        disabled={!editableFields.email}
                        required
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="password" className="forms-label"><strong>Password</strong></label>
                    <input
                        type="password"
                        className="forms-control"
                        name="password"
                        value={student.password || ''}
                        onChange={handleChange}
                        disabled={!editableFields.password}
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="contact" className="forms-label"><strong>Contact</strong></label>
                    <input
                        type="text"
                        className="forms-control"
                        name="contact"
                        value={student.contact}
                        onChange={handleChange}
                        disabled={!editableFields.contact}
                        required
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditStudent;

