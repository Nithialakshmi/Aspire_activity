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