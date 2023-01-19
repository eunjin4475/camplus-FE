// 보호된 리소스에 엑세스하는 데 사용 및 유저에게 보여지는 서비스
import axios from 'axios';
import authHeader from './auth-header';

const API_BASE_URL = 'http://127.0.0.1:8000/';
const posts = 'posts/';
const comments = 'comments/';

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

export const getList = async (id) => {
  const response = await axios.get(`${API_BASE_URL}${posts}${id}`, { headers: authHeader() });
  return response;
};

export const postList = (props) => {
  const { title, category, location, content } = props;
  axios.post(
    `${API_BASE_URL}${posts}`,
    {
      title,
      category,
      location,
      content,
    },
    { headers: authHeader() }
  );
};

export const postComment = (props) => {
  const { comment } = props;
  axios.post(
    `${API_BASE_URL}${comments}`,
    {
      comment,
    },
    { headers: authHeader() }
  );
};

export const deleteList = (props) => {
  const { id } = props;
  axios.delete(
    `${API_BASE_URL}${posts}`,
    {
      id,
    },
    { headers: authHeader() }
  );
};
