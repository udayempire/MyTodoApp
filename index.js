const express = require("express");
const {createTodo, updateTodo} = require("./types")
const {todo}= require("./db")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(404).json({
            msg:"Oops! You have entered wrong inputs"
        })
        return;
    } 
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })
    res.json({
        msg:"Congratulation Todo has been added"
    })

})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    }) 

})

app.get("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Oops! You have entered wrong input"
        })
        return;
    }
    await todo.update(
        {
            _id:req.body.id
        },{
            completed:true
        }
    )
        res.json({
            msg:"Todo marked as completed"
        })
})

app.listen(3000) 