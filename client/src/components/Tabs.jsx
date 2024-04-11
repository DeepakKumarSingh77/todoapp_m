import React from 'react'
import {TABS} from "../Redux/Action/type"
import { useDispatch } from 'react-redux'
import { toggleTab } from '../Redux/Action';
const Tabs = ({curtab}) => {
    const dispatch=useDispatch();
    return (
        <div className='alltabs'>
            {TABS.map((tab)=>{
                return(
                 <button key={tab._id} className='btn'  onClick={()=>{dispatch(toggleTab(tab))}}>{tab}</button>
                )
            })}
        </div>
    )
}
export default Tabs
