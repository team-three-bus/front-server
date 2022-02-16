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
    console.log(123, {...axiosOption, data: param})
    return axios({...axiosOption, data: param})
  } else {
    console.log(1234, axiosOption)
    return axios(axiosOption)
  }
}

export const getPopularItems = param => {
  const { num, category } = param;
  return  axiosRequest(
    'get', `products/main/popular?page=${num}${category ? `&category=${category}` : ""}`
  );
}