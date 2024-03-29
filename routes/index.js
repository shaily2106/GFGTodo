const express = require('express');
const Todo = require('../models/todo');
const routes  = express.Router();

routes.get("/",async(req,res) => {
    const allTodo = await Todo.find();
    res.render("home",{todo:allTodo});
});

routes.post("/add/todo",(req,res) => {
    const todo = req.body.todo;
    const newTodo = new Todo({todo:todo});
    newTodo.save().then(() => {
        console.log('Item has been added!');
        res.redirect("/");
    });
});

routes.get("/delete/todo/:_id",(req,res) => {
    const{_id} = req.params;
    Todo.deleteOne({_id})
    .then(() =>{
        console.log("Item is deleted");
        res.redirect("/");
    });
});

module.exports = routes;