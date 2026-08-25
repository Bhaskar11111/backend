const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'Username already exists'],
        required:[true,'Username is required']
    },
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true,'Email is required']
    },
    password:{
        type:String,
        unique:[true,'Password already exists'],
        required:[true,'Password is required'],
        select:false
    },
    bio:String,

    profilePicture:{
        type:String,
        default:"https://ik.imagekit.io/lngoi2rpi/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
    }
})

const userModel=mongoose.model('users',userSchema)

module.exports=userModel