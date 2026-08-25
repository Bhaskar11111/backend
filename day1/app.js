const express=require('express')
const cat=require('cat-me')
const app=express()
console.log(cat());

app.listen(3000)

