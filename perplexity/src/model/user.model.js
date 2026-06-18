const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,'username is required'],
            unique:true,
            trim:true
        },
        email:{
            type:String,
            required:[true,'email is required'],
            unique:true,
            trim:true
        },
        password:{
            type:String,
            minLength:6,
            required:true,
            select:false
        },
        verfied:{
            type:Boolean,
            default:false
        }
    }
)

const userModel=mongoose.model('user',userSchema)

module.exports=userModel;