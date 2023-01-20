import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageTemplate from '../templates/pageTemplate';

const Posting = (props) => {
  const navigate = useNavigate();
  const { token } = props;
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);
  return <PageTemplate pagesType="게시물" />;
};
Posting.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Posting;
