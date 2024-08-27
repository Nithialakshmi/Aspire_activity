var express = require('express');
var router = express.Router();
const db = require('../../studentresult/database');


router.use(express.json()); 
router.use(express.urlencoded({ extended: true })); 



router.get('/', function(req, res, next) {
  res.render('dashboard');
});


router.get('/student-count', (req, res) => {
  const sql1 = 'SELECT COUNT(rollno) AS studentCount FROM studentdetails';
  const sql2 = 'SELECT COUNT(courseid) AS courseCount FROM coursedetails';

  db.query(sql1, (err1, data1) => {
    if (err1) {
      console.error("Error counting student data:", err1);
      res.status(500).send("Internal Server Error");
      return;
    }
    const studentCount = data1[0].studentCount;
    console.log("Student data counted:", studentCount);

    db.query(sql2, (err2, data2) => {
      if (err2) {
        console.error("Error counting course data:", err2);
        res.status(500).send("Internal Server Error");
        return;
      }
      const courseCount = data2[0].courseCount;
      console.log("Course data counted:", courseCount);

      console.log("Passing studentCount to dashboard:", { studentCount });
      console.log("Passing courseCount to dashboard:", { courseCount });

      res.render('dashboard', { studentCount, courseCount });
    });
  });
});



module.exports = router;