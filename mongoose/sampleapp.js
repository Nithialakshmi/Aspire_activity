// Title:MongoDB
// Author:Nithialakshmi.N
// created date:08.05.2024
//  last-Modified date:13.05.2024 


var mongoose=require('mongoose')

var Schema=mongoose.Schema;


var skillSchema = new Schema({
        skillName:String,
        experience:Number,
        proficiency:String
    })

var jobSeekerSchema = new Schema({
    jobseekerName:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
})


var js=mongoose.model('jobseeker',jobSeekerSchema);
mongoose.connect("mongodb://127.0.0.1:27017/employee");
// var db=mongoose.connection;

var jobseeker1=new js({
    jobseekerName:"Nithin",
    emailId:"nithigmail.com",
    age:22,
    certified:true,
    skills:[{skillName:"java",experience:8,proficiency:"begineer"},
    {skillName:"C",experience:4,proficiency:"begineer"}
    ]


    
})

jobseeker1.save();
