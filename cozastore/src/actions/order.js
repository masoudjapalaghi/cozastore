export const  addOrder=order=>{
    return async dispatch=>{
        await dispatch({type:"SET_ORDER",payload:order})
    }
}

export const clearOrder=()=>{
    return async dispatch=>{
        await dispatch({type:"CLEAR_ORDER",payload:{}})
    }
}