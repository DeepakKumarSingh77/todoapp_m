const express=require('express');
const {addTodo,getTodo,toogleTodo,updateTodo,deleteTodo}=require("../controler/todo-controller.js")
const route=express.Router();

route.post('/todos',addTodo);
route.get('/todos',getTodo);
route.get('/todos/:id',toogleTodo);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);
module.exports = route; 