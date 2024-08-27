var express = require('express');
var router = express.Router();
var db = require('../../studentresult/database'); 


router.get('/', (req, res) => {
  res.render('forgotpassword');
});


router.post('/', (req, res) => {
  const email = req.body.email;
  const favoritePlace = req.body.favoritePlace;


  const sql = 'SELECT * FROM faculty WHERE email = ? AND question = ?';
  db.query(sql, [email, favoritePlace], (err, results) => {
    if (err) {
      console.error('Database error: ' + err.message);
      return res.status(500).send('Internal server error');
    }

    if (results.length === 0) {
     
      return res.render('forgotpassword', { error: 'Invalid email or favorite place' });
    }

  
    res.redirect(`/changepassword/${encodeURIComponent(email)}`);
  });
});

module.exports = router;
