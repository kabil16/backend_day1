const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("user router is wworking");
});
router.post("/add",async(req,res)=>{
   try {
        const user = new User({
            name:req.body.name,
            age:req.body.age,
            contact_no:req.body.contact_no
        })

        const data = await user.save();
        res.json(data);
    
   } catch (error) {
        res.json({msg:"Error occured in user add"})
   }
})

module.exports = router;