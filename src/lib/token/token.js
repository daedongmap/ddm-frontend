import { ACCESS_TOKEN_KEY } from "../../constant/token";

const tokenStore = {
  saveToken: (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  getToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  removeToken: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
};

export default tokenStore;
