const express = require("express");
const app = express();
//משתמשים בכדי לפצל את קבצי הניתוב בצורה יעילה ומ=הירה יותר כמו השם שלו
const port = process.env.PORT || 8080;
const cors = require("cors");
//מאפשר גישה לקבלת בקשות post get delete .... 
//דרד שני פורטים שונים או יותר מכיוון שיש צורך להגן מבקשות שלא נשלחות מהדומיין של הצד לקוח
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//מאפשר המרה של מבנים גייסון קוקיז סטרינגים
const student = require("./routers/Student");
const account_description = require("./routers/AccountDescription");
const course = require("./routers/Course");
const department = require("./routers/Department");
const instructor = require("./routers/Instructor");
const user = require("./routers/User");
require('dotenv').config();



//establish server uses
//https://blacknightacademy.netlify.app
//https://blacknightacademy.herokuapp.com
app.use(cors({
    origin: 'http://localhost:3000',
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

