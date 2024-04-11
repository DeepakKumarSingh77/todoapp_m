import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo,updateTodo } from '../Redux/Action/index';

const Tododata = ({todo}) => {
    const dispatch=useDispatch();
    const [edit,updateedit]=useState(false);
    const [text,updatetext]=useState(todo.data);
    const onformsubmit=(e)=>{
          e.preventDefault();
          updateedit(pre=>!pre);
          dispatch(updateTodo(todo._id,text));
    }
    return (
        <li className='tododata' style={{ textDecoration: todo.done ? "line-through" : "none", cursor: "pointer"}}>
            <span className='data' onClick={()=>{dispatch(toggleTodo(todo._id))}}  style={{display:edit?"none":""}}>{todo.data}</span>
            <form style={{display:edit?"inline":"none"}}  onSubmit={onformsubmit}>
                <input type='text' value={text} onChange={(e)=>updatetext(e.target.value)} className='edittext'/>
            </form>
            <div className='edit'>
                <span onClick={()=>{updateedit(!edit)}}><CiEdit className='icon'/></span>
                <span onClick={()=>dispatch(deleteTodo(todo._id))}><MdDelete className='icon delete'/></span>
            </div>
        </li>
    )
}

export default Tododata
