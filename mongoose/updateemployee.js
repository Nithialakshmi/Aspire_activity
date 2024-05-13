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

var jobseeker2=new js({
    jobseekerName:"Swathi",
    emailId:"swathi@gmail.com",
    age:25,
    certified:true,
    skills:[{skillName:"Angular",experience:10,proficiency:"Intermediate"},
    {skillName:"React",experience:2,proficiency:"begineer"}
    ]


    
})
//updated jobseeker1 emailId

jobseeker1.emailId="nithi@gmail.com";

console.log("updated Successfully");


jobseeker1.save();
jobseeker2.save();








