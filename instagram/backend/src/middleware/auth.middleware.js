const jwt=require('jsonwebtoken')

const identifyUser=(async(req,res,next)=>
{
    const token=req.cookies.token
    if(!token){
        res.status(401).json({
            message:'Token not found'
        })
    }

    let decoded
    try{
         decoded=jwt.verify(token,process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(403).json({
            message:'Unauthorized access'
        })
    }
    req.user=decoded
    next()
})

module.exports=identifyUser