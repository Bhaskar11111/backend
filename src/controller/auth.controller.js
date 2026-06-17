const registerUser=((req,res,next)=>
{
    res.status(201).json({
        message:'User registered successfully'
    })
    next(err)
})

module.exports=
{
    registerUser
}