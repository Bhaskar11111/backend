require('dotenv').config()
const postModel=require('../models/post.model')
const ImageKit=require('@imagekit/nodejs')
const {toFile}=require('@imagekit/nodejs')
const jwt=require('jsonwebtoken')
const client=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

const createPostController=(async(req,res)=>
{
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({
            message:'Token not found'
        })
    }
    
    let decoded=null

  try{
      decoded=jwt.verify(token,process.env.JWT_SECRET)
  }
  catch(err){
    return res.status(401).json({
        message:'Unauthorized access',
        err
    })
  }
    console.log(decoded)
    
    const response=await client.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:'fileName',
        folder:'cohort-2-i-c'
    })

    const post=await postModel.create({
        caption:req.body.caption,
        imageUrl:response.url,
        user:decoded.id
    })

    res.status(200).json({
        message:'Post created successfully',
        post 
    })    
})

module.exports={
    createPostController
}