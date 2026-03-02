const { default: mongoose } = require("mongoose");

const noteSchema=new mongoose.Schema({
    title:String,
    status:String,
    description:String,
    age:Number,
})

const noteModel=mongoose.model('noteApplication',noteSchema)

module.exports=noteModel;