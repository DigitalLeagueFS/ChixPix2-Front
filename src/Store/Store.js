import {combineReducers, createStore} from "redux";
import {clientsData, companyClick, companyData, getClientId, needUpdate, snackContent, tasksData} from "./Reducers";


export const store = createStore(combineReducers({
    companyClick,
    needUpdate,
    snackContent,
    getClientId,
    companyData,
    clientsData,
    tasksData
}));

// store.subscribe(()=>{
//      console.log(store.getState())
//  });