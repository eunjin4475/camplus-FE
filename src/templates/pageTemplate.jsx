import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SigninContent from '../components/contents/signinContent';
import SignupContent from '../components/contents/signupContent';
import HomeContent from '../components/contents/homeContent';
import PostContent from '../components/contents/postContent';

const PageTemplate = (props) => {
  const { pagesType } = props;
  return (
    <div>
      <Header pagesType={pagesType} />
      {pagesType === '로그인' && <SigninContent />}
      {pagesType === '회원가입' && <SignupContent />}
      {pagesType === '홈' && <HomeContent />}
      {pagesType === '작성' && <PostContent />}
    </div>
  );
};
PageTemplate.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default PageTemplate;
