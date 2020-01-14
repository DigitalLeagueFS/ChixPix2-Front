export const mapDispatchToProps = (dispatch)=> ({
    updateDataCl:()=>{
        dispatch({
            type:'NO_NEED_UPDATE',
        })
    }
});


export const mapStateToProps = (state) =>{
    return state.needUpdate
};