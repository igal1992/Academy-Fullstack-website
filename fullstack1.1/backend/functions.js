const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/student');
const bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//establishing connection with the data base
mongoose.connect('mongodb://localhost/my_db',{ useNewUrlParser: true });
mongoose.connection.once('open',function(){
  console.log('connection has been made');
}).on('error',function(){
  console.log('error is:',error);
});

//registering an account
app.post('/register', async (req, res) =>{
    try{
      MongoClient.connect(url, async (err, db) => {
        if (err) throw err;
        var dbo = db.db("my_db");
        var query = {username:req.query.username}
        dbo.collection("students").find(query).toArray(async (err, result) => {
          if (err) throw err;
          if (result.length == 0){
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.query.password,salt);
            const student = new Student({
              firstName:req.query.firstName,
              lastName:req.query.lastName,
              username:req.query.username,
              password:hashedPassword,
              email:req.query.email,
              phone:req.query.phone
              });
              student.save();
              res.status(201).send();
          }else if(result.length > 0){
            res.status(500).send();
            console.log("user exists Already!");
          }
          db.close();
        });
      });
    }catch{
      res.status(500).send();
      console.log("failed!");
    }
});
app.post('login', async (req,res) =>{
  console.log(req.query)
  MongoClient.connect(url, async (err, db) => {
    if (err) throw err;
    var dbo = db.db("my_db");
    var query = {username:req.query.username}
    dbo.collection("students").find(query).toArray(async (err, result) => {
      if (err) throw err;
      if (result.length == 0){
        return res.status(400).send('Cannot find user');
      }
      try{
        if(await bcrypt.compare(result.password,req.query.password)){
          console.log("logged in succesfuly!")
        }else{
          console.log("login failed please check your password!")
        }
      }catch{
        res.status(500).send();
      }
    });
  });
})
checkUser =(userName) =>{

}
//listen to port 8080
app.listen(8080);