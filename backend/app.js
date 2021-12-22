const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const student = require("./routers/Student");
const account_description = require("./routers/AccountDescription");
const course = require("./routers/Course");
const department = require("./routers/Department");
const instructor = require("./routers/Instructor");
const user = require("./routers/User");
const oneDay = 1000 * 24 * 60 * 60;
require('dotenv').config();



//establish server uses
//https://blacknightacademy.netlify.app
app.use(cors({
    origin: 'https://blacknightacademy.netlify.app',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(student);
app.use(account_description);
app.use(course);
app.use(department);
app.use(instructor);
app.use(user);
app.listen(port,()=>{
    console.log("listening on port " + port);
})

