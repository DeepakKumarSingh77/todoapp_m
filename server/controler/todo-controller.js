const TodoApp=require('../models/Todo.js');
const addTodo=async(req,res)=>{
     try {
        const {data}=req.body;
        const saveData=new TodoApp({data});
        await saveData.save();
        return res.status(200).json(saveData);
     } catch (error) {
        console.log("hello",error);
     }
};
const getTodo=async(req,res)=>{
    try {
       const todos=await TodoApp.find({}).sort({'createdAt':-1});
       return res.status(200).json(todos);
    } catch (error) {
       console.log(error);
    }
};
const toogleTodo=async(req,res)=>{
   try {
      const todoRef=await TodoApp.findById(req.params.id);
      await TodoApp.findByIdAndUpdate({
         _id:req.params.id},
         {
            done:!todoRef.done
         }
      );
      const todos=await TodoApp.findById(req.params.id);
      return res.status(200).json(todos);
   } catch (error) {
      console.log(error);
   }
};
const updateTodo=async(req,res)=>{
   try {
      await TodoApp.findByIdAndUpdate({
         _id:req.params.id},
         {
            data:req.body.data
         }
      );
      const todos= await TodoApp.findById(req.params.id);
      return res.status(200).json(todos);
   } catch (error) {
      console.log(error);
   }
};
const deleteTodo=async(req,res)=>{
   try {
      await TodoApp.findByIdAndDelete(req.params.id)
      return res.status(200).json();
   } catch (error) {
      console.log(error);
   }
};
module.exports={addTodo,getTodo,toogleTodo,updateTodo,deleteTodo}