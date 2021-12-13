const express = require("express");
const mysqlConnection = require("../utils/database");
const Router = express.Router();

//check session of user
Router.get('/user/session', (req,res) =>{
    if(!req.session.user){
      return res.status(401).send("you are unauthorized to access this location!");
    }
    return res.status(200).send("login session maintained")
});

//destroy session of user
Router.post('/user/logout',(req,res)=>{
    req.session.destroy();
});

Router.get('/user/userName',(req,res)=>{
  if(req.session.user){
    return res.send({"username":req.session.user.username})
  }
});
Router.get('user/Details',(req,res)=>{
  
})

module.exports = Router;