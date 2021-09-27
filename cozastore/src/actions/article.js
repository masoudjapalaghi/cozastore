import { getArticle } from "../services/articlsService";

export const getSingleArticle = (articleId) => {
  return async (dispatch) => {
    const { data } = await getArticle(articleId);
    await dispatch({ type: "GET_ARTICLE", payload: data });
  };
};
