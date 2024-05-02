const express = require('express')
const mongoose= require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()
const User= require('./models/user.model')
app.listen(process.env.PORT,()=>{
    console.log(`application running on port ${process.env.PORT}`)
})
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>
{res.send("yes you get it")})

mongoose.connect(process.env.CONNECTION_STRING)

const userRoute = require('./routes/userRoute.js')
app.use("/contacts",userRoute)


const db = mongoose.connection ; 
db.on("error",console.error.bind(console,"connection error"));
db.once("open",function(){console.log("Database connected successfully")});


app.use(cors()) ;
