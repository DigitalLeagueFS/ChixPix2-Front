export const mapDispatchToProps = (dispatch)=> ({
    updateData:()=>{
        dispatch({
            type:'NEED_UPDATE',
        })
    },
    showSnack:()=>{
        dispatch({
            type: 'SHOW_SNACK'
        })
    }
});


export const mapStateToProps = (state) =>{
    return state.needUpdate
};