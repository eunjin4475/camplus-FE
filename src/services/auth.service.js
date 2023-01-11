// 유저 인증에 관한 api
// login() - post & jwt 로컬 저장소에 저장
// logout() - jwt 로컬 저장소에서 삭제
// register() - post

import axios from 'axios';

const API_URL = '/auth/';

export const login = async (props) => {
  const { username, password } = props;
  const res = await axios({
    method: 'post',
    url: `${API_URL}signin`,
    data: {
      username,
      password,
    },
  });
  if (res.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const signup = (username, email, password) => {
  return axios({
    method: 'post',
    url: `${API_URL}signup`,
    data: {
      username,
      email,
      password,
    },
  });
};
