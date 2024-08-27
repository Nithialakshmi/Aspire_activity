const express = require('express');
const router = express.Router();
const db = require('../database');


router.use(express.json()); 
router.use(express.urlencoded({ extended: true })); 

router.get('/form', function(req, res, next) {
  res.render('signup'); 
});

router.post('/create', function(req, res, next) {
  const signupDetails = req.body;
  const sql = 'INSERT INTO faculty SET ?';

  db.query(sql, signupDetails, function(err, data) {
    if (err) throw err;
    console.log("SignUp data is inserted successfully");
    res.redirect('/signup/form'); 
  });
});

module.exports = router;