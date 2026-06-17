const express=require('express')
const app=express()

app.get('/',(req,res)=>
{
    res.send('This is Home page')
})

app.get('/about',(req,res)=>
{
    res.send('This is About page')
})
app.get('/product',(req,res)=>
{
    res.send('This is abc page')
})
app.get('/services',(req,res)=>
{
    res.send('Services')
})

app.listen(3000)