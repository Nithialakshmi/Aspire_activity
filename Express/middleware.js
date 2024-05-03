var express=require('express');

var server = express();
var passengerName;

server.use(airportTerminal);

function airportTerminal(request,respone,next){
    var proof=request.query['proof'];
    if(proof==='Aadhar'||'PAN')
    next()
else{
    response.send("<h1> Without valid proof, we are not allowed </h1>")
}
}

function getPassengerName(request,response,next){
    passengerName=request.query['passenger'];
    if(passengerName.length>=4)
    next()
else{
    response.send("<h1> Enter the valid Name<h1> ");
}
}

server.get("/targetflight",airportTerminal,(request,resonse)=>{
    response.send("<h1> welcome" + passengerName + " !!!!!</h1>")
});

server.listen(3003,() =>{
    console.log("Express js is waiting for client request")
});


server.get("/viptargetflight",(request,resonse)=>{
    response.send("<h1> welcome" + "VIP" + " !!!!!</h1>")
});
