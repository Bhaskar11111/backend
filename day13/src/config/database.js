const { default: mongoose } = require("mongoose")

require('dotenv').config()

const connectDB=(()=>
{
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>
    {
        console.log('Connected to databse')
    })
})

module.exports=connectDB