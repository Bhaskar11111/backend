const express=require('express')
const app=express()
app.use(express.json())
const cookieParser=require('cookie-parser')
app.use(cookieParser())
const authRouter=require('./routes/auth.route')
app.use('/practice/auth',authRouter)

module.exports=app