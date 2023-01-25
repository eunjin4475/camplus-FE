import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SigninContent from '../components/contents/signinContent';
import SignupContent from '../components/contents/signupContent';
import PostContent from '../components/contents/postContent';
import { BottomNavBtnList } from '../components/buttonList';
import HomeContent from '../components/contents/homeContent';
import MyPageContent from '../components/contents/myPageContent';
import PostingContent from '../components/contents/postingContent';

const PageTemplate = (props) => {
  const { pagesType } = props;
  return (
    <div className=" h-height flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center py-10 fixed top-0">
        <Header />
      </div>
      <div className=" w-full flex flex-col items-center justify-center">
        {pagesType === '로그인' && <SigninContent />}
        {pagesType === '회원가입' && <SignupContent />}
        {pagesType === '최근 게시물' && <HomeContent />}
        {pagesType === '글 작성' && <PostContent />}
        {pagesType === '마이페이지' && <MyPageContent />}
        {pagesType === '게시물' && <PostingContent />}
      </div>
      <div className=" h-bottomNavBtnHeight w-full bottom-0 fixed">
        <BottomNavBtnList />
      </div>
    </div>
  );
};
PageTemplate.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default PageTemplate;
