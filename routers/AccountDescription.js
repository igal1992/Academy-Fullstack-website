const express = require("express");
const mysqlConnection = require("../utils/database");
const Router = express.Router();


Router.get("/api/accountDescription/getData",(req,res)=>{
    const sql = "SELECT * FROM account_description"
    mysqlConnection.query(sql,(err,rows,fields)=>{
        if(rows.length ==0){
            throw err
        }else{
            res.send(rows)
        }
    })
})

module.exports = Router;
