export const addProductFav = (product) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_FAVORITE", payload: product });
  };
};

export const clearProductFav = (product) => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_FAVORITE", payload: product });
  };
};
