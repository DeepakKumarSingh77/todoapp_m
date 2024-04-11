import axios from "axios";
import { ADD_TODO,GET_TODO,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO,ACTIVE_TODO,TOGGLE_TAB} from "./type";
const API_URL='http://localhost:8000';
export const addTodo=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post(`${API_URL}/todos`,{data})
        dispatch({type:ADD_TODO,payload:res.data})
    } catch (error) {
        console.log("error during posting data",error.message);
    }
}
export const getTodo=()=>async(dispatch)=>{
    try {
        const res=await axios.get(`${API_URL}/todos`)
        dispatch({type:GET_TODO,payload:res.data})
    } catch (error) {
        console.log("Error While calling getTodo API",error.message);
    }
}
export const toggleTodo=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`${API_URL}/todos/${id}`)
        dispatch({type:TOGGLE_TODO,payload:res.data})
    } catch (error) {
        console.log("Error While calling toggleTodo API",error.message);
    }
}
export const updateTodo=(id,data)=>async(dispatch)=>{
    try {
        const res=await axios.put(`${API_URL}/todos/${id}`,{data})
        dispatch({type:UPDATE_TODO,payload:res.data})
    } catch (error) {
        console.log("Error While calling updateTodo API",error.message);
    }
}
export const deleteTodo=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`${API_URL}/todos/${id}`)
        dispatch({type:DELETE_TODO,payload:id})
    } catch (error) {
        console.log("Error While calling deleteTodo API",error.message);
    }
}
export const toggleTab=(tab)=>async(dispatch)=>{
        dispatch({type:TOGGLE_TAB,payload:tab});
}
