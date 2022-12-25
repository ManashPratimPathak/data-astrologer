const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const port = 5000;
const app = express();

// Database connection
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

const User = require('./model/userSchema')

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("DB Connected")
}).catch((err) => console.log("Not Connected"))


app.get("/", (req,res)=>{
    res.send("hello");
})
app.listen(port, (req,res) =>{
    console.log("Server has started......")
})