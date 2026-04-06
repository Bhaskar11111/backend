require('dotenv').config()
const { default: mongoose } = require("mongoose")

const connectDB=(()=>
{
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>
    {
        console.log('Connected to database')
    })
})

module.exports=connectDB