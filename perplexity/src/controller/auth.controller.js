const userModel = require("../model/user.model")
const bcrypt=require('bcryptjs')
const sendEmail = require("../services/mail.service")
const{welcomeEmailTemplate}=require('../Templates/mail.template')

const registerUser=(async(req,res,next)=>
{
    const{username,email,password}=req.body

    const isUserAlreadyExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists)
    {
        return res.status(400).json({
            message:`User already exists with this email or username`,
            success:false,
            err:'User already exists'
        })
    }
// console.log(req.body);
// console.log("password:", password)

    const hash=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,
        email,
        password:hash
    })

    await sendEmail({
        to:email,
        subject:"Welcome to Perplexity by Bhaskar",
        html:welcomeEmailTemplate(username)
    })

    res.status(200).json({
        message:'User registered successfully',
        user:
        {
            id:user._id,
            username,
            email,
            // verified:user.verified
        }
    })

})

module.exports=
{
    registerUser
}