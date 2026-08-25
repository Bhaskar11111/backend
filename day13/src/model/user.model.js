const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:[true,'Email already registered']
    },
    password:String
})

const userModel=mongoose.model('user_collection',userSchema)

module.exports=userModel