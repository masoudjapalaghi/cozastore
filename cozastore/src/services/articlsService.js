import http from "./httpService"
import config from "./config.json"

export const getArticls=()=>{
    return http.get(`${config.cozaapi}/articls`)
}

export const getArticle= (articleId) => {
    return http.get(`${config.cozaapi}/articls/${articleId}`);
};