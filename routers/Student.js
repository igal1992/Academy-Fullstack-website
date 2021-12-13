const express = require("express");
const mysqlConnection = require("../utils/database");
const bcrypt = require('bcrypt');
const { 
  v1: uuidv1
} = require('uuid');
const Router = express.Router();

//register mapping
Router.post("/api/register/student", (req, res) => {
    let qb = req.body;
    qb.id = uuidv1();
    const validate = "SELECT username FROM student WHERE username = ?"
    const sql = "INSERT INTO student SET ?"
    bcrypt.hash(qb.password,10,(err,hash)=>{
      if(!err){
        qb.password = hash
        mysqlConnection.query(validate,qb.username,(err,rows,fields)=>{
          if(rows.length == 0){
            mysqlConnection.query(
              sql, qb,
              (err, rows, fields) => {
                if (!err) {
                  return res.status(200).send("user created!");
                } else {
                  return res.status(500);
                }});
          }else{
            return res.status(406).send("user exists!")}});
      }})
});

//login mapping
Router.post("/api/login/student",(req,res) =>{
  let user = req.body;
  const sql = "SELECT username,password FROM student WHERE username = ?"
  mysqlConnection.query(sql,user.username,(err,rows,fields)=>{
    if(!err){
      if(rows.length != 0){
        bcrypt.compare(user.password,rows[0].password,(err,result)=>{
          if (result){
            req.session.user = user;
            req.session.save();
            return res.status(200).send("login successfully!");
          }else{
            return res.status(406).send("login failed!")}})
      }else{
        return res.status(404).send("user not found!")
      }
      }});
});
module.exports = Router;