import axios from 'axios';
import { URL } from 'Common/Util/Constant';

const axiosRequest = (method, url, param) => {
  const loginToken = localStorage.getItem("access_token");
  let axiosOption = {
    method: method,
    url: `${URL.API_SERVER}${url}`,
  }
  if (loginToken) {
    axiosOption.headers = {
      "authorization": localStorage.getItem("access_token")
    }
  }
  if (param) {
    return axios({...axiosOption, data: param})
  } else {
    return axios(axiosOption)
  }
}

export const getPopularItems = param => {
  const { num, category } = param;
  return  axiosRequest(
    'get', `products/main/popular?page=${num}${category ? `&category=${category}` : ""}`
  );
}