//settimeout
setTimeout(function(){
    console.log("Asynchronous task-1");
},1)


console.log("Synchronous task 1");

setTimeout(function() {
    console.log("Asynchronous task");
}, 0);

console.log("Synchronous task 2");


//setInterval and setTimeout

function printMessage() {
    console.log("Hello Everyone, Welcome to Aspire System ");
}
const intervalId = setInterval(printMessage, 2000);
setTimeout(() => {
    clearInterval(intervalId); 
    console.log('Thanks to all');
}, 10000);



//setImmediate
function myFunction() {
    console.log('Function executed');
}

console.log('Start');

setImmediate(myFunction);

console.log('End');



