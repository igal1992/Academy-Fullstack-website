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
          student.save().then(data =>{
            res.json(data);
          }).catch(error =>{
            res.json(error);
          })
          console.log("user created");
        }else if(student.length > 0){
          console.log("user exists Already!");
        }
        })
    }catch{
      res.send("failed!");
      console.log("failed!");
    }
});

//login to account
router.post('/login', async (req,res) =>{
  Student.find({username: req.body.username}, async (err,student) =>{
    if (err) throw err;
    if (student.length == 0){
      return console.log("user cannot be foound!");
    }
    const password =  student.pop(0).password;
    try{
      if(await bcrypt.compare(req.body.password,password)){
        console.log("logged in succesfuly!")
      }else{
        console.log("login failed please check your password!")
      }
    }catch{
      console.log("failed!")
    }
    });
  });

  module.exports = router;