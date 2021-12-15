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
    const validate_instructor = "SELECT username FROM instructor WHERE username = ?"
    const sql = "INSERT INTO student SET ?"
    bcrypt.hash(qb.password,10,(err,hash)=>{
      if(!err){
        qb.password = hash
        mysqlConnection.query(validate,qb.username,(err,rows,fields)=>{
          if(rows.length == 0){
            mysqlConnection.query(validate_instructor,qb.username,(err,rows,fields)=>{
              if(rows.length == 0){
                mysqlConnection.query(
                  sql, qb,
                  (err, rows, fields) => {
                    if (!err) {
                      return res.status(200).send("user created!");
                    } else {
                      return res.status(500);}});
              }else{
                return res.status(406).send("user exists!");}})
          }else{
            return res.status(406).send("user exists!")}});
      }})
});

//login mapping
Router.post("/api/login/student",(req,res) =>{
  let user = req.body;
  const sql = "SELECT * FROM student WHERE username = ?"
  mysqlConnection.query(sql,user.username,(err,rows,fields)=>{
    if(!err){
      if(rows.length != 0){
        bcrypt.compare(user.password,rows[0].password,(err,result)=>{
          if (result){
            const session = {
              username =  user,
              course = rows[0].course,
              first_name = rows[0].first_name,
              last_name = rows[0].last_name,
            }
            req.session.user = user;
            req.session.user.course = rows[0].course;
            req.session.user.first_name = rows[0].first_name;
            req.session.user.last_name = rows[0].last_name;
            return res.status(200).send(session);
          }else{
            return res.status(406).send("login failed!")}})
      }else{
        return res.status(404).send("user not found!")
      }
      }});
});
module.exports = Router;