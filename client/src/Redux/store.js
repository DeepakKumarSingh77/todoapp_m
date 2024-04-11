import {combineReducers,applyMiddleware, createStore} from "redux";
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {todoReducer} from './Reducer/todoReducer'
import {tabReducer} from './Reducer/tabReducer'
const reducer=combineReducers({
    todos:todoReducer,
    currenttab:tabReducer,
}
)
const middleware=[thunk];
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;