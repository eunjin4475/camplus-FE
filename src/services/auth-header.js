const authHeader = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData.token) {
    return { Authorization: `Token ${userData.token}` };
  }
  return {};
};

export default authHeader;
