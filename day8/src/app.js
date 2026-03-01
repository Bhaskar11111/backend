const express=require('express')
const app=express()
app.use(express.json())
const noteModel=require('../models/notes.model')

app.post('/notes',async(req,res)=>
{
    const data=req.body;
    const notes=await noteModel.create({
        title:data.title,
        status:data.status,
        description:data.description,
        age:data.age,
    })
    res.status(201).json({
        Message:"Note created successfully",
        notes
    })
})

app.get('/notes',async(req,res)=>
{
    const notes=await noteModel.find();
    res.status(200).json({
        Message:"Notes fetched successfully",
        notes
    })
})

module.exports=app;