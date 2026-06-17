const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')
const crypto=require('crypto')
const bcrypt=require('bcryptjs')

const registerController=async(req,res)=>
{
    const{username,email,password,bio}=req.body

    const isUserExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(isUserExists){
        return res.status(400).json({
            message:'User already exists'
        })
    }

    const hash=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,email,password:hash,bio
    })

    const token=jwt.sign({
        id:user._id,
        email:user.email,
        username:user.username
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie('token',token)

    res.status(200).json({
        message:'User registered successfully',
        user:{
            username,
            email,
            bio,
            profilePicture:user.profilePicture,
        }
    })
}

const loginController=async(req,res)=>{
    const{username,email,password}=req.body
    const hash=await bcrypt.hash(password,10)
    
    const user=await userModel.findOne({
        $or:[
            {username:username},
            {email:email},  
        ]
    }).select("+password")
     if(!user){
        return res.status(400).json({
            message:'User not found'
        })
    }

    const isValidPassword=await bcrypt.compare(password,user.password)

    if(!isValidPassword){
        return res.status(400).json({
            message:'Incorrect password'
        })
    }

    const token=jwt.sign({
        id:user._id,
        username:user.username,
        email:user.email
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie('token',token)

    console.log(req.body)
    res.status(200).json({
        message:'Loggedin successfully',
        user:{
            username:user.username,
            email:user.email
        }
    })
}

const getUserController=async(req,res)=>
{
    const userId=req.user.id
    
    const user=await userModel.findById(userId)

    if(!user){
        return res.status(404).json({
            message:'Access not granted'
        })
    }

    res.status(200).json({
        message:'User details fetched successfully',
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profilePicture   :user.profilePicture,
        }
    })
}

module.exports={
    registerController,
    loginController,
    getUserController
}