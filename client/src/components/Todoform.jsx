import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Redux/Action/index';
const Todoform = () => {
    const [text,settext]=useState('');
    const dispatch= useDispatch()
    const onFormSubmit=(e)=>{
         e.preventDefault();
         dispatch(addTodo(text));
         settext('');
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input placeholder='Enter Note...'
                    onChange={(e)=>{settext(e.target.value)}}
                    value={text}
                    className='inputform'
                />
            </form>
        </div>
    )
}

export default Todoform
