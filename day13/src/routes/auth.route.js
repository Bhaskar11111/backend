const express=require('express')
const userModel=require('../model/user.model')
const authRouter=express.Router()
const jwt=require('jsonwebtoken')
const crypto=require('crypto')

authRouter.post('/register',async(req,res)=>
    {
    const{username,email,password}=req.body
    const isAlreadyRegistered=await userModel.findOne({email})
 
    if(isAlreadyRegistered){
     return res.status(400).json({
         message:'Email already registered'
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


   res.status(201).json({
    message:'User created successfully',
    user,
    token
   })
})

authRouter.post('/login',async(req,res)=>
{
    const{email,password}=req.body

      const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({
            message: 'User not found'
        })
    }

    const token=jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    const hash=crypto.createHash('md5').update(password).digest('hex')

    const isPasswordMatched=user.password===hash

    if(!isPasswordMatched){
        return res.status(400).json({
            message:'Incorrect Password'
        })
    }


    res.status(200).json({
        message:'Logged in successfully',
        // token
    })
})


module.exports=authRouter