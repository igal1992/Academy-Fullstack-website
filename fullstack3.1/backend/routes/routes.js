const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const bcrypt = require('bcrypt');


//registering an account
router.post('/register', async (req, res) =>{
    try{
      Student.find({username: req.body.username}, async (err,student) =>{
        if (err) throw err;
        if (student.length == 0){
          const hashedPassword = await bcrypt.hash(req.body.password,10);
          const student = new Student({
          firstName:req.body.firstName,
          lastName:req.body.lastName,
          username:req.body.username,
          password:hashedPassword,
          email:req.body.email,
          phone:req.body.phone
          });
          student.save();
          res.json({success:"User Created Successfully"});
        }else if(student.length > 0){
          res.json({fail:"User Exists Already"});        }
        })
    }catch{
      res.json({runTime:"Run Time Error"});
    }
});

//login to account
router.post('/login', async (req,res) =>{
  Student.find({username: req.body.username}, async (err,student) =>{
    if (err) throw err;
    if (student.length == 0){
      res.json({error:"User Cannot Be Found"});
      return;
    }
    const password =  student.pop(0).password;
    try{
      if(await bcrypt.compare(req.body.password,password)){
        res.json({success:"Login Successfully"});
      }else{
        res.json({fail:"Login failed Password is Inccorect"});
      }
    }catch{
      res.json({runTime:"Run Time Error"});
    }
    });
  });

  module.exports = router;