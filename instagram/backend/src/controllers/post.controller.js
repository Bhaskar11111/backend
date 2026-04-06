require('dotenv').config()
const postModel=require('../models/post.model')
const likeModel=require('../models/like.model')
const jwt=require('jsonwebtoken')
const ImageKit=require('@imagekit/nodejs')
const {toFile}=require('@imagekit/nodejs')

const client=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

const createPostController=(async(req,res)=>
{ 
   
    const userId=req.user.id
    console.log(userId)

    const response=await client.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:req.file.originalname,
        folder:'instagram2'
    })

    const post=await postModel.create({
        caption:req.body.caption,
        imageUrl:response.url,
        user:userId

    })

    res.status(200).json({
        message:'Post created successfully',
        post
    })    
})

const getPostController=(async(req,res)=>
{
    

    const userId=req.user.id

    const post=await postModel.findOne({
        user:userId
    })

    res.status(200).json({
        message:'Post fetched successfully',
        post
    })
})

const getPostDetailsController=(async(req,res)=>
{
   
    const userId=req.user.id
    const postId=req.params.postId

    const post=await postModel.findById(postId)
    if(!post){
        return res.status(404).json({
            message:'Post not found'
        })
    }

    const isValidUser=post.user.toString()===userId.toString()

    if(!isValidUser){
        return res.status(403).json({
            message:'Forbidden content'
        })
    }

    res.status(200).json({
        message:'Post fetched successfully',
        post
    })
})

const likePostController=(async(req,res)=>
{
    const username=req.user.username
    const postId=req.params.postId
    console.log(username,postId)

    const post=await postModel.findById(postId)
    if(!post){
        return res.status(404).json({
            message:'The post you are attempting to like, does not exists'
        })
    }

    const likes=await likeModel.create({
        user:username,
        post:postId
    })

    res.status(200).json({
        message:'Post liked successfully',
        likes
    })
})

module.exports={
    createPostController,
    getPostController,
    getPostDetailsController,
    likePostController
}