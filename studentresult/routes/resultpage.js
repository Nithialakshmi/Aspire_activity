var express = require('express');
var router = express.Router();
const db = require('../database');

const {GetCourse, getCourses, saveMarks } = require('../database');



router.get('/', function(req, res, next) {
  res.render('resultpage', { title: 'Express' });
});




router.get('/course', async (req, res) => {
    try {
        const courses = await getCourses();
        const rollno = req.query.rollno; 
        res.render('resultpage', { courses, rollno});
    } catch (error) {
        res.status(500).send('Error fetching courses');
    }
});





router.post('/create', function(req, res, next) {
 
  var rollno= req.body.rollno;

 console.log(req.body);
 var courseresult=null;
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
       var count=0;
       courseResults.forEach(course => {
      
        var fin ="marks["+course.courseid+"]";
        
         var mark=req.body.marks[count];
        
         const query = 'INSERT INTO resultdetails (rollno, courseid, marks) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE marks = VALUES(marks)';
         db.query(query, [rollno, course.courseid, mark]);
         count=count+1;
 


      
    });  
      
      
     });
     res.render('result');    
   } else {
     
   }
 });

 

  
  
  
});


module.exports = router;