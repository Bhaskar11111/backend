const express=require('express')
const app=express()
app.use(express.json())
const cookieParser=require('cookie-parser')
app.use(cookieParser())
const authRouter=require('./routes/auth.route')
app.use('/test/api',authRouter)
const postRouter=require('./routes/post.route')
app.use('/test/post',postRouter)


module.exports=app