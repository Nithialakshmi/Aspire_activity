const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  coursename: {
    type: String,
    required: true,
  },
  courseid: {
    type: String,
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

});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
