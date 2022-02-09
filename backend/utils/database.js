//establish db connection
const mysql = require('mysql2')
require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
})
connection.connect(function(err){
    if(err){
       console.log(err);
    }
   console.log("db Connected...");
  });

  module.exports = connection;