import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageTemplate from '../templates/pageTemplate';

const Home = (props) => {
  const navigate = useNavigate();
  const { token } = props;
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);
  return <PageTemplate pagesType="최근 게시물" />;
};
Home.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Home;
