
import * as actionTypes from "../Action/type";

export const todoReducer=(state=[],action)=>{
     switch (action.type) {
        case actionTypes.ADD_TODO:
            return [action.payload,...state];
        case actionTypes.GET_TODO:
            return action.payload
        case actionTypes.TOGGLE_TODO:
            return state.map(todo=>(
                todo._id===action.payload._id?{...todo,done:!todo.done}:todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map(todo=>(
                todo._id===action.payload._id?{...todo,data:action.payload.data}:todo
                ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo=>todo._id!==action.payload);
        default:
            return state;
     }
}