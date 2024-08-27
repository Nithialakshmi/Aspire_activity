const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    rollno: {
        type: String,
        required: true
    },
    marks: {
        type: Map,
        of: Number,
        required: true
    }
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;