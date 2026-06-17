const express=require('express')
const app=express()
const notesModel=require('../models/notes.model')
app.use(express.json())

app.post('/notes',async(req,res)=>
{
    const {title,description,age}=req.body;
    const notes=await notesModel.create({
        title,description,age
    })
    res.status(201).json({
        message:'Note created successfully',
        notes
    })
})

app.get('/notes',async(req,res)=>
{
    const notes=await notesModel.find()
    res.status(200).json({
        message:'Notes fetched successfully',
        notes
    })
})

module.exports=app