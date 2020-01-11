const AppState = {
    name:'',
    desc:'',
    text:'',
    img:'',
    link:'',
    error:''
};

export function companyClick(state = AppState,action) {
    if (action.type === 'COMPANY_CLICK') {
        return {
            ...state,
            ...action.payload
        };
    }
    return state
}

// export function errorState(state= AppState,action) {
//     if(action.type === 'ADD_ERROR'){
//         return {
//             ...state,
//             error: action.payload
//         }
//     }
//     return state
// }