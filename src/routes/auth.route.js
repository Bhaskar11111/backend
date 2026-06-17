const express=require('express')
const router=express.Router()
const authController=require('../controller/auth.controller')
const authValidator=require('../validator/auth.validation')

router.post('/register',authValidator,authController.registerUser)

module.exports=router