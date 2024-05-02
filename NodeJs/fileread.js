var fs=require("fs");
var data;
fs.readFile="input1.txt",(err,data)=>{
    if(err)
    {
        console.log("error is reading a file")
    }
    else{
        console.log(data);
    }
}