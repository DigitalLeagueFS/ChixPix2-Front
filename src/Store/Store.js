import {combineReducers, createStore} from "redux";
import {companyClick, needUpdate, snackContent} from "./Reducers";


export const store = createStore(combineReducers({companyClick,needUpdate,snackContent}));

store.subscribe(()=>{
    console.log(store.getState())
});