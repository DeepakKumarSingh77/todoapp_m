import {ACTIVE_TODO, DONE_TODO, TOGGLE_TAB} from "../Action/type";

export const tabReducer=(state=ACTIVE_TODO,action)=>{
     switch (action.type) {
        case TOGGLE_TAB:
            return action.payload;
        default:
            return state;
     }
}