const express=require('express')
const app=express()

app.get('/',(req,res)=>
{
    res.send('hell')
})
app.listen(3000)