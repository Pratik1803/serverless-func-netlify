const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req,res)=>{
    res.json({message:"Hello"})
});

router.get("/test/:uid", (req,res)=>{
    res.json({message:`Hello user ${req.params.uid}`})
});

app.use( "/.netlify/functions/api" ,router);


module.exports.handler = serverless(app);