const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/', function(req, res, next) {
  res.render('home'); 
});

module.exports = router;