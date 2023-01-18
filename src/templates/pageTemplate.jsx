import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SigninContent from '../components/contents/signinContent';
import SignupContent from '../components/contents/signupContent';
import PostContent from '../components/contents/postContent';
import { BottomNavBtnList } from '../components/listButton';
import HomeContent from '../components/contents/homeContent';
import MyPageContent from '../components/contents/myPageContent';
import Posting from '../components/contents/postingContent';

const PageTemplate = (props) => {
  const { pagesType } = props;
  return (
    <div className=" h-height flex flex-col items-center justify-evenly">
      <div className=" h-headerHeight fixed top-0">
        <Header pagesType={pagesType} />
      </div>
      <div className=" h-contentHeight">
        {pagesType === '로그인' && <SigninContent />}
        {pagesType === '회원가입' && <SignupContent />}
        {pagesType === '최근 게시물' && <HomeContent />}
        {pagesType === '글 작성' && <PostContent />}
        {pagesType === '마이페이지' && <MyPageContent />}
        {pagesType === '게시물' && <Posting />}
      </div>
      <div className=" h-bottomNavBtnHeight fixed bottom-0">
        <BottomNavBtnList />
      </div>
    </div>
  );
};
PageTemplate.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default PageTemplate;
