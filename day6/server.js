const { default: mongoose } = require('mongoose');
const app=require('./src/app')
require('dotenv').config()

const connectDB=(()=>
{
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>
    {
        console.log('Connected to Database');  
    })
})

connectDB()

app.listen(3000,()=>
{
    console.log('Server running on port 3000'); 
})