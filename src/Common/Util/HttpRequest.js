import axios from 'axios';
import { URL } from 'Common/Util/Constant';

const axiosRequest = (method, url, param) => {
  if (param) {
    return axios({
      method: method,
      url: `${URL.API_SERVER}${url}`,
      data: param
    })
  } else {
    return axios({
      method: method,
      url: `${URL.API_SERVER}${url}`
    })
  }
}

export const getPopularItems = param => {
  const { num, category } = param;
  return  axiosRequest(
    'get', `products/main/popular?page=${num}${category ? `&category=${category}` : ""}`
  );
}