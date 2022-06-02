import { ACCESSTOKEN, DOMAIN, Token, TokenByClass, TOKEN_CYBERSOFT, USER_LOGIN } from "../util/config";
import axios from "axios";

let token = "";
if (localStorage.getItem(USER_LOGIN)) {
  token = JSON.parse(localStorage.getItem("Token"));
}

export class baseService {

  put = (url, model) => {  //put json về phía backend
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + token, TokenByClass: TokenByClass, Token: token }, //JWT
      
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + token, TokenByClass: TokenByClass, Token: token }, //JWT
      
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + token, TokenByClass: TokenByClass, Token: token }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
      
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + token, TokenByClass: TokenByClass, Token: token }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
      
    });
  };
}

// Setup axios interceptor
export const http = axios.create({
  baseURL: DOMAIN, // Dommain khi request api sẽ được ghép vào với link
  timeout: 30000, // Thời gian tối đa chờ response trả về
});