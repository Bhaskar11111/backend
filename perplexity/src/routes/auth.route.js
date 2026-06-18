const express=require('express')
const router=express.Router()
const authController=require('../controller/auth.controller')
const {registerValidator}=require('../validator/auth.validator')

router.post('/register',registerValidator,authController.registerUser)

module.exports=router