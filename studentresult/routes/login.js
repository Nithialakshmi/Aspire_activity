

const express = require('express');
const router = express.Router();
const db = require('../database');



router.get('/form', function(req, res, next) {
  res.render('login'); 
});




router.get('/signin/:email/:password', function(req, res, next) {
   var email= req.params.email;
   var password= req.params.password;
   var query=`SELECT * FROM faculty WHERE email="${email}" and password="${password}"`;

   db.query(query, function(error, data){
    if (error) throw error;
    else{
              if(data.length==0)
                {
                 
                    res.render('loginfail'); 
             
                }
               
                else
                res.redirect("/dashboard/student-count");

             
    }
});
});
module.exports = router;