const express=require('express')
const postRouter=express.Router()
const postController=require('../controllers/post.controller')
const multer=require('multer')
const upload=multer({storage:multer.memoryStorage()})
const identifyUser=require('../middleware/auth.middleware')

postRouter.post('/create',identifyUser,upload.single('image'),postController.createPostController)

postRouter.get('/',identifyUser,postController.getPostController)

postRouter.get('/details/:postId',identifyUser,postController.getPostDetailsController)

postRouter.get('/feed',identifyUser,postController.getFeedController)

postRouter.post('/like/:postId',identifyUser,postController.likePostController)

postRouter.post('/unlike/:postId',identifyUser,postController.unlikePostController)

module.exports=postRouter