const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});





app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);


});



const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));



app.post('/submit',(req, res) => {
  const{username,password}=req.body;
  const userdata={
    username, 
    password
  }
  axios.post("http://localhost:3000/users",userdata).then(data=>{
    res.send("user data saved success")
  }).catch(err=>console.log("error saving the data",err))
})





// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser'); 

// app.use(bodyParser.urlencoded({ extended: false }));


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/static/index.html');
// });


// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/static/login.html');
// });