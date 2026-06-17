const express=require('express')
const app=express()
app.use(express.json())
const authRouter=require('./routes/auth.route')
const cookieParser=require('cookie-parser')

app.use(cookieParser())
app.use('/api/auth',authRouter)

module.exports=app