import axios from 'axios';
import { URL } from 'Common/Util/Constant';

const axiosRequest = (method, url, param, body) => {
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
  if (body) {
    axiosOption.data = body
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

export const postLikeItem = param => {
  return axiosRequest('post', `products/like`, null, { "productId" : param.id })
}

export const deleteLikeItem = param => {
  return axiosRequest('delete', `products/like`, null, { "productId" : param.id })
}

export const getItemDetail = param => {
  const { id } = param;
  return axiosRequest('get', `products/v2?id=${id}`)
}