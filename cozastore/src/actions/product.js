import {getProduct } from "../services/productsService";
export const getSingleProduct= (productId) => {
  return async (dispatch) => {
    const { data } = await getProduct(productId);
    await dispatch({ type: "GET_PRODUCT", payload: data });
  };
};
