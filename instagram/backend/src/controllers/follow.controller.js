const followModel=require('../models/follow.model')
const { findByIdAndDelete } = require('../models/post.model')
const userModel = require('../models/user.model')

const followUserController=(async(req,res)=>
{
    const followerUsername=req.user.username
    const followeeUsername=req.params.username
    
    if(followerUsername==followeeUsername){
        return res.status(400).json({
            message:`You can not follow yourself`
        })
    }

    const isFolloweeExists=await userModel.findOne({
        username:followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message:`The user you are requesting to follow does not exists`
        })
    }

    const isAlreadyFollowed=await followModel.findOne({
        followerUsername,
        followeeUsername
    })

    if(isAlreadyFollowed){
        return res.status(200).json({
            message:`You are already a follower of ${followeeUsername}`,
            isAlreadyFollowed
        })
    }

    const followRecord=await followModel.create({
        followerUsername,
        followeeUsername
    })
    res.status(200).json({
        message:`You started following ${followeeUsername}`,
        followRecord
    })
})

const unfollowUserController=(async(req,res)=>
{
    const followerUsername=req.user.username
    const followeeUsername=req.params.username

    const isUserFollowing=await followModel.findOne({
        followerUsername,
        followeeUsername
    })
    // console.log(isUserFollowing)

    if(!isUserFollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUsername}`
        })
    }

    const unfollowRecord=await followModel.findByIdAndDelete(isUserFollowing._id)
    res.status(200).json({
        message:`You've unfollowed ${followeeUsername}`,
        unfollowRecord
    })
})

module.exports={
    followUserController,
    unfollowUserController
}