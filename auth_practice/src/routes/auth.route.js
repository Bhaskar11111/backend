const express=require('express')
const userModel=require('../model/user.model')
const authRouter=express.Router()
const crypto=require('crypto')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const cookieParser=require('cookie-parser')

authRouter.post('/register',async(req,res)=>
{
    const {username,email,password}=req.body
    
    const isAlreadyRegistered=await userModel.findOne({email})
    if(isAlreadyRegistered){
        return res.status(400).json({
            message:"Email already registered"
        })
    }

    const hash=crypto.createHash('md5').update(password).digest('hex')

    const user=await userModel.create({
        username,email,password:hash
    })

    const token=jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(200).json({
        message:'User registered successfully',
        user,
        token
    })
})

authRouter.post('/login',async(req,res)=>
{
    const {email,password}=req.body
    const user=await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message:'User not found'
        })
    }

    const hash=crypto.createHash('md5').update(password).digest('hex')

    const isPasswordMatched=user.password===hash
    if(!isPasswordMatched){
        return res.status(400).json({
        message:'Incorrect password'
        })
    }

    res.status(200).json({
        message:'Logged in successfully',
        user
    })
})

authRouter.get('/get-dets',async(req,res)=>
{
    const token=req.cookies.token
    if(!token){
        res.status(400).json({
            message:'Token not found'
        })
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)

    const user=await userModel.findById(decoded.id)

    res.status(200).json({
        message:'User fetched successfully',
        username:user.username,
        email:user.email
    })
})

module.exports=authRouter