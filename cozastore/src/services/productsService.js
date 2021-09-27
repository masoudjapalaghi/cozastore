import http from "./httpService"
import config from "./config.json"

export const getProducts=()=>{
    return http.get(`${config.cozaapi}/products`)
}
export const getProduct= (productId) => {
    return http.get(`${config.cozaapi}/products/${productId}`);
};