
import { getArticls } from './../services/articlsService';
export const getallArticls= () => {
  return async (dispatch) => {
    const { data } = await getArticls();
    await dispatch({ type: "INIT_ARTICLS", payload: data });

  };
};
