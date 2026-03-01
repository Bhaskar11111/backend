const { default: mongoose } = require("mongoose");

const notesScheme=new mongoose.Schema({
    title:'String',
    status:'String',
    description:'String',
    age:'Number'
})

const noteModel=new mongoose.model('notes',notesScheme)

module.exports=noteModel