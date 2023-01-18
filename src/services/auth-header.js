const authHeader = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return { Authorization: `Token ${token}` };
  }
  return {};
};

export default authHeader;
