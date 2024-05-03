//  Title of Application : NodeJs
//  Author:Nithialakshmi.N
//   created date:27.04.2024
//   last-Modified date:30.04.2024 

var event=require('events');
var emitter= new event.EventEmitter();
emitter.on('trackdelivery',()=> {
    console.log("order out for delivery");
 
});

function deliveryStatus(){
    console.log("Delivery status");
    console.log("First status");
    emitter.emit("trackdelivery");
}

deliveryStatus();