const express = require('express');
const router = express.Router();
const db = require('../database');


router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

router.get('/form', function(req, res, next) {
  res.render('course'); 
});

router.post('/create', function(req, res, next) {
  const courseDetails = req.body;
  const sql = 'INSERT INTO coursedetails SET ?';

  db.query(sql, courseDetails, function(err, data) {
    if (err) throw err;
    console.log("Course data is inserted successfully");
    res.redirect('/course/form'); 
  });
});


router.get('/course-list', (req, res) => {
    const sql = 'SELECT * FROM coursedetails';
    db.query(sql, (err, data) => {
      if (err) throw err;
      res.render('course-list', { title: 'Course List', courseData: data });
    });
  });

  router.get('/edit/:id', function(req, res, next) {
    var CourseId= req.params.id;
    var sql=`SELECT * FROM coursedetails WHERE courseid="${CourseId}"`;
    db.query(sql, function (err, data) {
      if (err) throw err;
       console.log(data[0]);
      res.render('course-form', { title: 'Course List', editData: data[0]});
    });
});
router.post('/edit/:id', function(req, res, next) {
var id= req.params.id;
  var updateData=req.body;
  console.log("UpdateData IDss");
  var sql = `UPDATE coursedetails SET ? WHERE courseid= ?`;
  db.query(sql, [updateData, id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) updated");
});
res.redirect('/course/course-list');
});



router.get('/delete/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM coursedetails WHERE courseid = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  res.redirect('/course/course-list');
  
});




module.exports = router;