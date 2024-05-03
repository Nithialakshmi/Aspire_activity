//path module
var path=require("path");
var filename = {dir:"\\dir2\\dir3\\",base:"text.txt"}

var exactpath=path.format(filename);
console.log(exactpath)

var xpath=path.join("test","dummy","basefile.txt")
console.log(xpath);

//os module
var os=require("os");
console.log(os.arch());
console.log(os.release());


//cluster module
var cluster=require("cluster");
var http=require("http");
var cpus=require("os").cpus.length;
if(cluster.isMaster)
{
    masterProcess()
}
else{
    childProcess()
}
function masterProcess(){
    console.log("Master ${process.pid} is running")
    for(let i=0;i<cpus;i++)
{
    console.log("forking process number ${i} ");
    cluster.fork();
}
process.exit();}
function childProcess(){
    console.log("child ${process.pid} started and completed");
    process.exit();
}

