const expressValidator=require('express-validator')
const {body,validationResult}=expressValidator
const validate=((req,res,next)=>
{
    const errors=validationResult(req)

    if(errors.isEmpty())
    {
        return next()
    }
    res.status(400).json({
        error:errors.array()
    })
})

const registerValidation=[
    body("username").isString().withMessage('username should be a string'),
    body("email").isEmail().withMessage('email should be a valid email address'),
    body("password").isLength({min:6,max:12}).withMessage('password should contain 6-12 characters').custom((value)=>
    {
        if (value.length<6) throw new Error("password must contain at least 6 characters")

            const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

            if(!passRegex.test(value))
            {
                throw new Error("Password must contain 6 characters with one number");
            }
            return true

    }),

    validate
]

module.exports=registerValidation