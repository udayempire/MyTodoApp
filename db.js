const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:uday6207592112@cluster0.ib11rsi.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo = mongoose.model('todos',todoSchema);

module.exports= {
    todo
}