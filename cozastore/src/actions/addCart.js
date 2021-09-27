export const  addProductCart=product=>{
    return async dispatch=>{
        await dispatch({type:"ADD_CART",payload:product})
    }
}

export const clearProductCart=(product)=>{
    return async dispatch=>{
        await dispatch({type:"CLEAR_CART",payload:product})
    }
}

