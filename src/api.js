import axios from 'axios';

const getListAll = () => {
  const response = axios({
    method: 'get',
    url: '/todo',
  });
  return response;
};

export default getListAll;
