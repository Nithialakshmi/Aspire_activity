import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import "./Home.css";

const Home = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
   
    axios.get('http://127.0.0.1:3001/viewstudent')
      .then(response => {
        setStudentCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });

   
    axios.get('http://127.0.0.1:3001/viewcourse')
      .then(response => {
        setCourseCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  return (
    <div>
      <Dashboard />

      <section className="dashboard" style={{height:"100%"}}>
        <div className="top">
          <i className="uil uil-bars sidebar-toggle"></i>
        </div>

        <div className="dash-content" style={{paddingLeft: "17%", marginTop: "100px"}}>
          <div className="overview">
            <div className="title">
              <i className="uil uil-tachometer-fast-alt"></i>
              <span className="text">Dashboard</span>
            </div>

            <div className="boxes">
              <div className="box box1">
                <i className="uil uil-files-landscapes"></i>
                <span className="text">Student List</span>
                <span className="number">{studentCount}</span>
              </div>
              <div className="box box2">
                <i className="uil uil-files-landscapes"></i>
                <span className="text">Course List</span>
                <span className="number">{courseCount}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
