import {createStore} from "redux";
import {companyClick} from "./Reducers";


export const store = createStore(companyClick);

// store.subscribe(()=>{
//     console.log(store.getState())
// });