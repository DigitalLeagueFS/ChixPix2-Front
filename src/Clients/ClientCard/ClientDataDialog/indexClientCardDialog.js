export const mapDispatchToProps = (dispatch)=> ({
    showSnack:()=>{
        dispatch({
            type:'SHOW_SNACK',
        })
    },
    updateData:()=>{
        dispatch({
            type:'NEED_UPDATE',
        })
    },
});

export const mapStateToProps = (state) =>{
    return state
};