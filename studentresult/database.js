var mysql = require('mysql');
var conn = mysql.createConnection({
host: 'localhost', 
user: 'root', 
password: 'Nithia@7603', 
database: 'studentresultdb' 
});
conn.connect(function(err) {
if (err) throw err;
console.log('Database is connected successfully !');
});



async function getCourses(rollno) {
    // const [rows] = await db.query('SELECT courseid, coursename FROM coursedetails');
    // return rows;
    const checkQuery = 'SELECT * FROM studentdetails WHERE  rollno = ?';
    db.query(checkQuery, [rollno], (err, results) => {
      if (err) {
        console.error('Error executing checkQuery:', err);
        return res.status(500).send('Database error');
      }
  
      if (results.length > 0) {
     
        const courseQuery = 'SELECT courseid, coursename FROM coursedetails WHERE dept = ? AND year = ? AND semester = ?';
        // console.log('Executing courseQuery:', courseQuery, [dept, year, semester]);
        db.query(courseQuery, [results[0].dept, results[0].year,results[0].semester], (err, courseResults) => {
          if (err) {
            console.error('Error executing courseQuery:', err);
            return res.status(500).send('Database error');
          }
          
         
          console.log('Course query results:', courseResults);
          return courseResults;
       
        
        });
      } else {
      
       return null;
      }
    });
}


function saveMarks(rollno, courseid, mark) {
    const query = 'INSERT INTO resultdetails (rollno, courseid, marks) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE marks = VALUES(marks)';
     db.execute(query, [rollno, courseid, mark]);
}


function GetCourse(rollno){
    const checkQuery = 'SELECT * FROM studentdetails WHERE  rollno = ?';
  db.query(checkQuery, [rollno], (err, results) => {
    if (err) {
      console.error('Error executing checkQuery:', err);
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
    
      const courseQuery = 'SELECT courseid, coursename FROM coursedetails WHERE dept = ? AND year = ? AND semester = ?';
      // console.log('Executing courseQuery:', courseQuery, [dept, year, semester]);
      db.query(courseQuery, [results[0].dept, results[0].year,results[0].semester], (err, courseResults) => {
        if (err) {
          console.error('Error executing courseQuery:', err);
          return res.status(500).send('Database error');
        }
        
       
        console.log('Course query results:', courseResults);
        return courseResults;
        
      
      });
    } else {
     
     return null;
    }
  });
}

module.exports = { getCourses, saveMarks, GetCourse};


module.exports = conn;