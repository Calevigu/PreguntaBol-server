require("dotenv").config();

const {PORT}=process.env;
const router=require("./src/app.js");

const express=require("express");
const server=express();
server.use("/",router);
server.listen(PORT,console.log("server listening on port 3000"));