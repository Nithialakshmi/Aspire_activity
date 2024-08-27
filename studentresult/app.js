var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var studentRouter = require('./routes/student');
var courseRouter = require('./routes/course');

var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');

var dashboardRouter = require('./routes/dashboard');
var homeRouter = require('./routes/home');
var resultRouter= require('./routes/result');
var resultpageRouter=require('./routes/resultpage');

var forgotpasswordRouter = require('./routes/forgotpassword');
var changepasswordRouter= require('./routes/changepassword');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/course', courseRouter);

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/result', resultRouter);

app.use('/resultpage',resultpageRouter);

app.use('/changepassword', changepasswordRouter);
app.use('/forgotpassword',forgotpasswordRouter);


app.use('/dashboard', dashboardRouter);
app.use('/home', homeRouter);


app.use(function(req, res, next) {
  next(createError(404));
});




app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 
  res.status(err.status || 500);
  res.render('error');
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
