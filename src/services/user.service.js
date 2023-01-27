// 보호된 리소스에 엑세스하는 데 사용 및 유저에게 보여지는 서비스
import axios from 'axios';
import authHeader from './auth-header';

const API_BASE_URL = 'http://127.0.0.1:8000/';
const posts = 'post/';
const comments = 'comments/';

// 해결완료
export const getAllList = () => {
  const response = axios.get(`${API_BASE_URL}${posts}`, { headers: authHeader() });
  return response;
};

export const getCategoryList = (category) => {
  const response = axios.get(`${API_BASE_URL}${posts}?category=${category}`, {
    headers: authHeader(),
  });
  return response;
};

export const getList = (id) => {
  const response = axios.get(`${API_BASE_URL}${posts}${id}`, { headers: authHeader() });
  return response;
};

export const myList = () => {
  const response = axios.get(`${API_BASE_URL}mypage/`, { headers: authHeader() });
  return response;
};

export const postList = (props) => {
  const { title, category, location, body } = props;
  const response = axios.post(
    `${API_BASE_URL}${posts}create/`,
    {
      title,
      category,
      location,
      body,
    },
    { headers: authHeader() }
  );
  return response;
};

export const postComment = (props) => {
  const { post, text } = props;
  const response = axios.post(
    `${API_BASE_URL}${comments}`,
    {
      post,
      text,
    },
    { headers: authHeader() }
  );
  return response;
};

export const deleteList = (id) => {
  const response = axios.delete(`${API_BASE_URL}${posts}${id}`, { headers: authHeader() });
  return response;
};
