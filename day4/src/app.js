const express=require('express')
const app=express()
app.use(express.json())
const notes=[]

app.get('/notes',(req,res)=>
{
    res.send(notes)
})

app.post('/notes',(req,res)=>
{
    notes.push(req.body)
    res.send('Note created')
    console.log(req.body);
})

app.patch('/notes/:id',(req,res)=>
{
    notes[req.params.id].title=req.body.title
    res.send('Modifications done')
})

app.delete('/notes/:id',(req,res)=>
{
    delete notes[req.params.id]
    res.send('Note 2 deleted')
})

module.exports=app