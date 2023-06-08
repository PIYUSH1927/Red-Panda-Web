const express = require("express")
const app = express();

app.get("/facts",(req,res)=>{
    res.sendFile(__dirname+"/facts.html");
})

app.listen("3000",()=>{
    console.log("Port 3000");
})