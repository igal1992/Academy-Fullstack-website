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

//delete account by username
Router.post("/user/deleteUser/:username",(req,res) =>{
  const sql_student = "SELECT * FROM student WHERE username = ?";
  const sql_instructor = "SELECT * FROM instructor WHERE username = ?";
  const delete_student = "DELETE FROM student WHERE username = ?"
  const delete_instructor = "DELETE FROM instructor WHERE username = ?"
  mysqlConnection.query(sql_student,req.params.username,(err,rows,fields)=>{
    if(!err){
        if(rows.length !=0){
          mysqlConnection.query(delete_student,req.params.username,(err,rows,fields)=>{
            if(!err){
              res.send(200);
            }else{
              res.sendStatus(404);
            }
          })
        }else{
          mysqlConnection.query(sql_instructor,req.params.username,(err,rows,fields)=>{
            if(rows.length !=0){
              mysqlConnection.query(delete_instructor,req.params.username,(err,rows,fields)=>{
                if(!err){
                  res.send(200);
                }else{
                  res.sendStatus(404);
                }
              })
            }else{
              res.send(404);
            }
          })
        }
    }else{
        res.sendStatus(300);
    }
})
})

module.exports = Router;