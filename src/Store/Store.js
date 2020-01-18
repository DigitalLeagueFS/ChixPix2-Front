import {combineReducers, createStore} from "redux";
import {companyClick, getClientId, needUpdate, snackContent} from "./Reducers";


export const store = createStore(combineReducers({companyClick,needUpdate,snackContent,getClientId}));

store.subscribe(()=>{
    console.log(store.getState())
});