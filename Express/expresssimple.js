// var express=require('express');
// var server=express();



// server.get("/signin",(request,response)=>{
//     // response.send("<h1>Express js application</h1>")

//     var username=request.query['username'];
//     response.send("<h1> welcome"+ username+"</h1>")
// })


// server.get("/home",(request,response)=>{
//     response.send("<h1>Landing home page</h1>")
// })


// server.listen(5000,()=>
// {
//     console.log("express server is waiting for client connections")
// })



// const bodyParser = require('body-parser');
// var express =require.('express');


// var server=express();
// server.use(bodyParser.urlencoded({extended:false}))



// // server.use(express.urlencoded({ extended: true }));

// server.post("/signin", (request, response) => {
//     // response.send("<h1>Express js application</h1>")

//     var username = request.body['username'];
//     response.send("<h1>Welcome " + username + "</h1>");
// });
// server.get("/payment/:option",(request,response)=>{

//     var paymentOption=request.parms['option'];
//     if(paymentOption=="debit"){
//         response.send("<h1> debit card page will be landing soon</h1>");  
//     }
//     else if(paymentOption=="credit"){
//         response.send("<h1> credit card page will be landing soon</h1>") ;  
//     }
//     else {
//         response.send("<h1> No Option Yet </h1>");
//     }
    
// });

// server.get("/home", (request, response) => {
//     response.send("<h1>Landing home page</h1>");
// });

// server.listen(5000, () => {
//     console.log("Express server is waiting for client connections");
// });



const express = require('express'); 
const server = express();

server.use(express.urlencoded({ extended: false })); 
server.post("/signin", (request, response) => {
    var username = request.body['username'];
    response.send("<h1>Welcome " + username + "</h1>");
});

server.get("/payment/:option", (request, response) => {
    var paymentOption = request.params['option']; 
    if (paymentOption === "debit") { 
        response.send("<h1>Debit card page will be landing soon</h1>");
    } else if (paymentOption === "credit") { 
        response.send("<h1>Credit card page will be landing soon</h1>");
    } else {
        response.send("<h1>No Option Yet</h1>");
    }
});

server.get("/home", (request, response) => {
    response.send("<h1>Landing home page</h1>");
})
server.get("/",(request,response)=>
{
    response.status(501);
    response.sendfile("index.html")
})

server.get("/contactus",(request,response)=>
{
    var contact={
        "id":"c001",
        "name":"Nithia",
        "mobileNo":8072608190
    }
    response.json(contact)
    // response.redirect("www.google.com")
})

server.use(express.static('http://localhost:3001/index.html'));

server.listen(3001, () => {
    console.log("Express server is waiting for client connections");
});
