console.log(__filename)

//synchronous
var fs=require('fs');
var data ="file demo for synch program"

console.log("file write start here")
fs.writeFileSync("input.txt",data);

console.log("file write completed");
console.log("program ends here");



//asynchronous 
var fs=require('fs');
var data ="file demo for asynch program"
console.log("file write start here")

fs.writeFile("input.txt",data,() =>{
    console.log("file write completed")
})

console.log("program ends here");
