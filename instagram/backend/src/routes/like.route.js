const express=require('express')
const likeRouter=express.Router()
const identifyUser=require('../middleware/auth.middleware')
const likeController=require('../controllers/like.controller')

likeRouter.post('/like/:postId',identifyUser,likeController.postLikeController)


module.exports=likeRouter