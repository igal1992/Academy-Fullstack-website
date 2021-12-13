const express = require("express");
const mysqlConnection = require("../utils/database");
const Router = express.Router();


Router.get("/api/department/getData",(req,res)=>{
    const sql = "SELECT * FROM department"
    mysqlConnection.query(sql,(err,rows,fields)=>{
        if(rows.length ==0){
            throw err
        }else{
            res.send(rows)
        }
    })
})

module.exports = Router;