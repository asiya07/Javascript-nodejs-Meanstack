/*
 * Filename: d:\js2\js2.js
 * Path: d:\js2
 * Created Date: Wednesday, March 21st 2018, 6:28:07 pm
 * Author: Asiya
 * 
 * Copyright (c) 2018 Your Company
 */


var express = require("express");
var app = express();
 var port= 3000;

 app.use('/' ,(req,res)=>
 {
     //res.send("hello");
     res.sendFile(__dirname +"/index1.html")
 });

 app.listen(port,()=>{

     console.log("listening at"+port);
 });
 
