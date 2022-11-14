const express = require('express');
const connectDB = require('./config/db');
const mentorRouter = require('./routes/mentor')
const userRouter = require('./routes/user')
const app = express();
const port = 3000;

connectDB();
//to change the body data to jSON
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("server is working")
});
app.use("/mentor",mentorRouter)
app.use("/user",userRouter)


app.listen(port,()=>{
    console.log(`server has been startd  : ${port}`);
});