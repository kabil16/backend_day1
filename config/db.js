const mongoose = require('mongoose');
const url = "mongodb+srv://kabil:kabil1996@cluster0.tdwut.mongodb.net/backend_day1?retryWrites=true&w=majority"

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(url)
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
} ;

module.exports = connectDB;