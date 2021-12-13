const express = require("express");
const mysqlConnection = require("../utils/database");
const Router = express.Router();


Router.get("/api/course/getData",(req,res)=>{
    const sql = "SELECT * FROM course"
    mysqlConnection.query(sql,(err,rows,fields)=>{
        if(rows.length ==0){
            throw err
        }else{
            res.send(rows)
        }
    })
})


Router.get("/api/course/getDataByDepartmentName/:department_name",(req,res) =>{
    const sql = "SELECT * FROM course WHERE department_name = ?"
    mysqlConnection.query(sql,req.params.department_name,(err,rows,fields)=>{
        if(!err){
            if(rows.length !=0){
                res.send(rows)
            }else{
                res.sendStatus(404)
            }
        }else{
            res.sendStatus(300)
        }
    })
})

module.exports = Router;