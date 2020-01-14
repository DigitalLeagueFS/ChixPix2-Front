const AppState = {
    name:'',
    desc:'',
    text:'',
    img:'',
    link:'',
    error:'',
    needUpdate:false,
    success:false
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

export function needUpdate(state = AppState,action) {
    switch (action.type) {
        case 'NEED_UPDATE':
            return{
                ...state,
                needUpdate: true,
            };
        case 'NO_NEED_UPDATE':
            return {
                ...state,
                needUpdate: false
            };
        default:
            return state
    }
}

export function snackContent(state = AppState,action) {
    switch (action.type) {
        case 'SHOW_SNACK':
            return {
                ...state,
                success: true
            };
        case 'HIDE_SNACK':{
            return {
                ...state,
                success: false
            }
        }
        default:
            return state
    }
}