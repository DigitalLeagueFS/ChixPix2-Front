const AppState = {
    name:'',
    desc:'',
    text:'',
    img:'',
    link:''
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