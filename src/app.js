require('dotenv').config()
const express=require('express')
const app=express()
const authRouter=require('../src/routes/auth.route')
const handleError=require('../src/middleware/error.middleware')

app.use(express.json())
app.use('/test/auth',authRouter)

app.use(handleError)

module.exports=app;