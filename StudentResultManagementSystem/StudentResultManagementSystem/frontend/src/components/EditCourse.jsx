
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [course, setCourse] = useState({
        coursename: '',
        courseid: '',
        department: '',
        year: '',
        semester: '',
       
    });
    const [editableFields, setEditableFields] = useState({
        coursename: true,
        courseid:true,
        department: true,
        year: true,
        semester: true,
       
    });

    useEffect(() => {
        fetch(`http://localhost:3001/viewcourse/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setCourse(data);
            })
            .catch(error => console.error('Error fetching student data:', error));
    }, [id]);
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3001/editcourse/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Updated data:", data);
               
                navigate(`/viewcourse`);
            })
            .catch(error => console.error('Error updating student data:', error));
    };

    return (
        <div>
            <form id="forms" onSubmit={handleSubmit}>
                <h2>Edit Course</h2>
              
                <div className="forms-group">
                    <label htmlFor="coursename" className="forms-label"><strong>CourseName</strong></label>
                    <input
                        type="text"
                        className="forms-control"
                        name="coursename"
                        value={course.coursename}
                        onChange={handleChange}
                        disabled={!editableFields.coursename}
                        required
                    />
                </div>
                
                <div className="forms-group">
                    <label htmlFor="courseid" className="forms-label"><strong>CourseId</strong></label>
                    <input
                        type="text"
                        className="forms-control"
                        name="courseid"
                        value={course.courseid}
                        onChange={handleChange}
                        disabled={!editableFields.courseid}
                        required
                    />
                </div>
                <div className="forms-group">
                    <label htmlFor="department" className="forms-label"><strong>Department</strong></label>
                    <select
                        name="department"
                        className="forms-control"
                        value={course.department}
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
                        value={course.year}
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
                        value={course.semester}
                        onChange={handleChange}
                        disabled={!editableFields.semester}
                        required
                    >
                        <option value="None">None</option>
                        <option value="Odd">Odd</option>
                        <option value="Even">Even</option>
                    </select>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditCourse;
