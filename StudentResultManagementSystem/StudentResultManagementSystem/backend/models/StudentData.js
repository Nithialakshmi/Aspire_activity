const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  dateofBirth: {  
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
  },
  password: { 
    type: String,
    required: true,
  },
  contact: {
    type: Number, 
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
