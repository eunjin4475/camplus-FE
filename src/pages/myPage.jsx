import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageTemplate from '../templates/pageTemplate';

const MyPage = (props) => {
  const navigate = useNavigate();
  const { token } = props;
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);
  return <PageTemplate pagesType="마이페이지" />;
};
MyPage.propTypes = {
  token: PropTypes.string.isRequired,
};

export default MyPage;
