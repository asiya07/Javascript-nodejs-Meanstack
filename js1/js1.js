/*
 * Filename: d:\js1\js1.js
 * Path: d:\js1
 * Created Date: Tuesday, March 20th 2018, 6:27:13 pm
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
     res.sendFile(__dirname +"/index.html")
 });

 app.listen(port,()=>{

     console.log("listening at"+port);
 });
 