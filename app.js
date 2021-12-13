const express = require("express");
const PORT = process.env.port || 5000;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
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
app.use(cors({
    origin: 'https://blacknightacademy.netlify.app',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
    key:"user",
    secret:process.env.SECRET_SESSION_KEY,
    saveUninitialized:false,
    cookie:{maxAge:oneDay, secure:false, httpOnly: true},
    resave:false
}));
app.use(student);
app.use(account_description);
app.use(course);
app.use(department);
app.use(instructor);
app.use(user);
app.listen(PORT,()=>{
    console.log("server is up and running!");
})
