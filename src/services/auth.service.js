// 유저 인증에 관한 api
// login() - post & jwt 로컬 저장소에 저장
// logout() - jwt 로컬 저장소에서 삭제
// register() - post

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://127.0.0.1:8000/';

export const login = async (props) => {
  const { username, password } = props;
  const navigate = useNavigate();
  const res = await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/users/login/',
    data: {
      username,
      password,
    },
  });
  if (res.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(res.data));
    navigate('/home');
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const signup = (props) => {
  const { username, nickname, password, password2, university } = props;
  return axios({
    method: 'post',
    url: `${API_BASE_URL}/users/register`,
    data: {
      username,
      nickname,
      password,
      password2,
      university,
    },
  });
};
