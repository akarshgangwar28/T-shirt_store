const express=require("express")
require("dotenv").config();
const app=express();




app.get("/",(req,res)=>
{
    res.send("badiya chal rha")
})


module.exports=app;