
const express = require('express');
const router = express.Router();
const db = require('../../studentresult/database');


router.use(express.json()); 
router.use(express.urlencoded({ extended: true })); 

router.get('/form', function(req, res, next) {
  res.render('student'); 
});





router.post('/create', function(req, res, next) {
  const studentDetails = req.body;
  const sql = 'INSERT INTO studentdetails SET ?';

  db.query(sql, studentDetails, function(err, data) {
    if (err) throw err;
    console.log("Student data is inserted successfully");
    res.redirect('/student/form'); 
  });
});




router.get('/student-list', (req, res) => {
  const sql = 'SELECT * FROM studentdetails';
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.render('student-list', { title: 'Student List', studentData: data });
  });
});



router.get('/edit/:id', function(req, res, next) {
  var StudentId= req.params.id;
  var sql=`SELECT * FROM studentdetails WHERE rollno=${StudentId}`;
  db.query(sql, function (err, data) {
    if (err) throw err;
   
    res.render('student-form', { title: 'Student List', editData: data[0]});
  });
});
router.post('/edit/:id', function(req, res, next) {
var id= req.params.id;
var updateData=req.body;
var sql = `UPDATE studentdetails SET ? WHERE rollno= ?`;
db.query(sql, [updateData, id], function (err, data) {
if (err) throw err;
console.log(data.affectedRows + " record(s) updated");
});
res.redirect('/student/student-list');
});


router.get('/delete/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM studentdetails WHERE rollno = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  res.redirect('/student/student-list');
  
});




module.exports = router;














