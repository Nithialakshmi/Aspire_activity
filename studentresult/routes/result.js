const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/form', function(req, res, next) {
  res.render('result'); 
});

router.post('/create', (req, res) => {
  const { first, rollno, dept, year, semester } = req.body;


  console.log('Received request data:', { first, rollno, dept, year, semester });


  const checkQuery = 'SELECT * FROM studentdetails WHERE  rollno = ?';
  db.query(checkQuery, [rollno], (err, results) => {
    if (err) {
      console.error('Error executing checkQuery:', err);
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
     
      const courseQuery = 'SELECT courseid, coursename FROM coursedetails WHERE dept = ? AND year = ? AND semester = ?';
      
      db.query(courseQuery, [results[0].dept, results[0].year,results[0].semester], (err, courseResults) => {
        if (err) {
          console.error('Error executing courseQuery:', err);
          return res.status(500).send('Database error');
        }
        
        
        console.log('Course query results:', courseResults);

       
        res.render('resultpage', { 
          alertMessage: 'Student details already exist!',
          first: results[0].first,
          rollno: results[0].rollno,
          dept: results[0].dept,
          year: results[0].year,
          semester: results[0].semester,
          courses: courseResults
        });
      });
    } else {
     
      res.render('result', { 
        alertMessage: 'Student details do not exist in the database!',
        courses: [] 
      });
    }
  });
});






module.exports = router;



