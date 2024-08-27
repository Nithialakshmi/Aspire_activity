var express = require('express');
var router = express.Router();
var db = require('../../studentresult/database');


router.get('/:email', (req, res) => {
  const email = decodeURIComponent(req.params.email);
  res.render('changepassword', { email });
});


router.post('/update', (req, res) => {
  const email = req.body.email;
  const newPassword = req.body.password;

  const sql = 'UPDATE faculty SET password = ? WHERE email = ?';
  db.query(sql, [newPassword, email], (err, result) => {
    if (err) {
      console.error('Database error: ' + err.message);
      return res.status(500).send('Internal server error');
    }

    res.send('Password updated successfully');
  });
});







module.exports = router;