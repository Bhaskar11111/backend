const { default: mongoose } = require("mongoose");

const followSchema=mongoose.Schema({
    
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
  },
{
    timeStamps:true
})

const followModel=mongoose.Model('followers',followSchema)

module.exports=followModel