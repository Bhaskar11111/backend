const { default: mongoose } = require("mongoose");

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'posts',
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

const likeModel=mongoose.model('likes',likeSchema)

module.exports=likeModel

