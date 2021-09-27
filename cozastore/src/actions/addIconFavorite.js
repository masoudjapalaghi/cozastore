export const addIconFav = (productId) => {
    return async (dispatch) => {
      await dispatch({ type: "SET_ICONFAVORITE", payload: productId });
    };
  };
  
  export const clearIconFav = (productId) => {
    return async (dispatch) => {
      await dispatch({ type: "CLEAR_ICONFAVORITE", payload: productId });
    };
  };
  