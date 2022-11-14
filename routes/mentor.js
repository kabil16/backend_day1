const express = require('express');
const Mentor = require('../models/mentor');
const User = require('../models/user');
const router = express.Router();

router.get("/",(req,res)=>{
    console.log("mentor router is wworking");
    res.send("mentor is working")
});
router.post("/add",async(req,res)=>{
    console.log(req.body);
    try {
        const mentor = new Mentor({
            name:req.body.name,
            age:req.body.age,
            contact_no:req.body.contact_no,
            experience:req.body.experience
        });
        const data = await mentor.save();
        res.json(data);               
    } catch (error) {
        res.json({msg:"Error occurred"});
    }
})

module.exports = router;