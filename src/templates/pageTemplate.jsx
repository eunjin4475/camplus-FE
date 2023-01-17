import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SigninContent from '../components/contents/signinContent';
import SignupContent from '../components/contents/signupContent';
import PostContent from '../components/contents/postContent';
import { BottomNavBtnList, CategoryBtnList } from '../components/listButton';
import HomeContent from '../components/contents/homeContent';
import MyPageContent from '../components/contents/myPageContent';

const PageTemplate = (props) => {
  const { pagesType } = props;
  return (
    <div>
      <Header pagesType={pagesType} />
      {pagesType === '로그인' && <SigninContent />}
      {pagesType === '회원가입' && <SignupContent />}
      {pagesType === '홈' && (
        <div>
          <CategoryBtnList />
          <HomeContent />
          <BottomNavBtnList className="fixed bottom-0" />
        </div>
      )}
      {pagesType === '작성' && (
        <div>
          <PostContent />
          <BottomNavBtnList />
        </div>
      )}
      {pagesType === '마이페이지' && (
        <div>
          <MyPageContent />
          <BottomNavBtnList />
        </div>
      )}
    </div>
  );
};
PageTemplate.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default PageTemplate;
