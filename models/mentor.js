const mongoose = require('mongoose');

const Mentor = mongoose.model("mentors",{
    name:String,
    age:Number,
    contact_no:Number,
    experience:Number
});

module.exports = Mentor;