import { getProducts } from "../services/productsService";

export const getallProducts = () => {
  return async (dispatch) => {
    const { data } = await getProducts();
    await dispatch({ type: "INIT_PRODUCTS", payload: data });

  };
};
