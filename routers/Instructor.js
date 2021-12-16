const express = require("express");
const mysqlConnection = require("../utils/database");
const bcrypt = require('bcrypt');
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const Router = express.Router();

Router.post("/api/register/instructor", (req, res) => {
    let qb = req.body;
    qb.id = uuidv1();
    const validate = "SELECT username FROM instructor WHERE username = ?"
    const validate_student = "SELECT username FROM student WHERE username = ?"
    const sql = "INSERT INTO instructor SET ?"
    bcrypt.hash(qb.password,10,(err,hash)=>{
      if(!err){
        qb.password = hash
        mysqlConnection.query(validate,qb.username,(err,rows,fields)=>{
          if(rows.length == 0){
            mysqlConnection.query(validate_student,qb.username,(err,rows,fields)=>{
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
Router.post("/api/login/instructor",(req,res) =>{
  let user = req.body;
  let qb = req.body;
  const sql = "SELECT * FROM instructor WHERE username = ?"
  mysqlConnection.query(sql,qb.username,(err,rows,fields)=>{
    if(!err){
      if(rows.length != 0){
        bcrypt.compare(qb.password,rows[0].password,(err,result)=>{
          if (result){
            const session = {
              username: user.username,
              department: rows[0].department_name,
              first_name: rows[0].first_name,
              last_name: rows[0].last_name,
            }
            return res.status(200).send(session);
          }else{
            return res.status(406).send("login failed!")}})
      }else{
        return res.status(404).send("user not found!")
      }
      }});
});




module.exports = Router;