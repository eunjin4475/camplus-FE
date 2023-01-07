import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SigninContent from '../components/contents/signinContent';

// bottomNavButton 추가
const PageTemplate = (props) => {
  const { pagesType } = props;
  return (
    <div>
      <Header pagesType={pagesType} />
      {pagesType === '로그인' && <SigninContent />}
    </div>
  );
};
PageTemplate.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default PageTemplate;
