const express=require('express')
const app=express()
app.use(express.json())
const cookieParser=require('cookie-parser')
const cors=require('cors')

app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

const authRouter=require('./routes/auth.route')
const postRouter=require('./routes/post.route')
const followRouter=require('./routes/follow.route')
const likeRouter=require('./routes/like.route')


app.use('/test/auth',authRouter)
app.use('/test/post',postRouter)
app.use('/test/user',followRouter)
app.use('/test/posts',likeRouter)



module.exports=app