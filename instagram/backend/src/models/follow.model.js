const { default: mongoose } = require("mongoose");

const followSchema=new mongoose.Schema({
    followerUsername:{
        type:String,
        required:true
    },
    followeeUsername:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

followSchema.index({follower:1, followee:1},{unique:true})

const followModel=mongoose.model('follow',followSchema)

module.exports=followModel