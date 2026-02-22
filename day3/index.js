const express=require('express')
const app=express()

app.get('/',(req,res)=>
{
    res.send('Daniel Day Lewis')
})
app.listen(3000)