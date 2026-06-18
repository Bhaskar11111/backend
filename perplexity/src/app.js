const express=require('express')
const app=express()
const authRouter=require('./routes/auth.route')

app.use(express.json())
app.use('/test/auth',authRouter)

module.exports=app