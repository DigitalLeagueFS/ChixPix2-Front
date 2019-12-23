
export const mapDispatchToProps = (dispatch)=> ({
    clickCompany:(payload)=>{
        dispatch({
            type:'COMPANY_CLICK',
            payload:payload
        })
    }
});


export const mapStateToProps = (state) =>{
    return state
};