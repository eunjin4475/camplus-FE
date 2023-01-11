import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SigninContent from '../components/contents/signinContent';
import { Navbtn } from '../components/button';

const PageTemplate = (props) => {
  const { pagesType } = props;
  return (
    <div>
      <Header pagesType={pagesType} />
      {pagesType === '로그인' && <SigninContent />}
      <Navbtn text="홈" />
      <Navbtn text="마이" />
    </div>
  );
};
PageTemplate.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default PageTemplate;
