const { default: mongoose } = require("mongoose");

const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imageUrl:{
        type:String,
        require:[true,'imgUrl is required']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'userId is required']
    }
})

const postModel=mongoose.model('posts',postSchema)

module.exports=postModel