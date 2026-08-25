const express=require('express')
const userModel=require('../models/user.model')
const authRouter=express.Router()
const jwt=require('jsonwebtoken')


authRouter.post('/register',async(req,res)=>
{
    const{username,email,password}=req.body

    const isAlreadyRegistered=await userModel.findOne({
        email
    })

    if(isAlreadyRegistered){
        return res.status(400).json({
            message:'Email already registered'
        })
    }

    const user=await userModel.create({
        username,email,password
    })

    const token=jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        mesage:'User created successfully',
        user,
        token
    })
})


module.exports=authRouter