const { default: mongoose } = require("mongoose")
require('dotenv').config()
const connectDB=(()=>
{
    mongoose.connect(process.env.CONNECTION_STRING)
    .then((e)=>
    {
        console.log('Connected to database');
    })
})

module.exports=connectDB