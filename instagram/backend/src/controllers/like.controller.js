const likeModel=require('../models/like.model')
const postModel = require('../models/post.model')

const postLikeController=(async(req,res)=>
{
    const user=req.user.username
    const post=req.params.postId

    const isPostExists=await postModel.findById(post)

    if(!isPostExists){
        return res.status(404).json({
            message:'Post does not exists'
        })
    }

    const isAlreadyLiked=await likeModel.findOne({
        post
    })

    if(isAlreadyLiked){
        return res.status(200).json({
            message:'Already liked'
        })
    }

    const likeRecord=await likeModel.create({
        post,
        user
    })

    res.status(200).json({
        message:'You liked a post',
        likeRecord
    })
})

module.exports={
    postLikeController
}