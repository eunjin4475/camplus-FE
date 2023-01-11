// 보호된 리소스에 엑세스하는 데 사용 및 유저에게 보여지는 서비스
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/auth/';

export const getListAll = () => {
  return axios.get(`${API_URL}`, { headers: authHeader() });
};

export const getList = ({ univ, id }) => {
  return axios.get(`${API_URL}${univ}/${id}`);
};
// user가 로그인을 하였을 경우에 한해서 보여지는 값
export const getUserBoard = () => {
  return axios.get(`${API_URL}user`, { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(`${API_URL}mod`, { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(`${API_URL}admin`, { headers: authHeader() });
};
