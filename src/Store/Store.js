import {combineReducers, createStore} from "redux";
import {companyClick} from "./Reducers";


export const store = createStore(combineReducers({companyClick}));

store.subscribe(()=>{
    console.log(store.getState())
});