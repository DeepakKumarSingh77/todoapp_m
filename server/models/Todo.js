const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true,
    },
    done:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const TodoApp =mongoose.model('TodoApp',TodoSchema);

module.exports=TodoApp;