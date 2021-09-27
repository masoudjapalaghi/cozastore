import http from "./httpService";
import config from "./config.json";

export const setOrderService = (order) => {
  return http.post(`${config.cozaapi}/Orders`,order);
};

export const getOrderService = () => {
  return http.get(`${config.cozaapi}/Orders`);
};
