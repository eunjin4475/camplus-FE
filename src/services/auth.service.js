import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/';

export const login = (prop) => {
  const { username, password } = prop;
  const response = axios({
    method: 'post',
    url: `${API_BASE_URL}users/login/`,
    data: {
      username,
      password,
    },
  });
  return response;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const signup = (props) => {
  const { username, nickname, password, password2, university, email } = props;
  const response = axios({
    method: 'post',
    url: `${API_BASE_URL}users/register/`,
    data: {
      username,
      nickname,
      password,
      password2,
      university,
      email,
    },
  });
  return response;
};
