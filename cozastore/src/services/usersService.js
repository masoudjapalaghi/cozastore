import http from "./httpService";

import config from "./config.json";

export const registerUser = (user) => {
  return http.post(`${config.cozaapi}/auth/local/register`, user);
};

export const loginUser = (user) => {
  return http.post(`${config.cozaapi}/auth/local`, user);
};

export const informatinUser = (token) => {
  return http.get(`${config.cozaapi}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
