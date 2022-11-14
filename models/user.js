const mongoose =require('mongoose');
const User = mongoose.model("users",{
    name:String,
    age:Number,
    contact_no:Number
});
module.exports = User;
