import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

const Header = (props) => {
  const { pagesType } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="로고 이미지" />
      {pagesType === 'home' ? (
        <span>버튼 들어가야 합니다</span>
      ) : (
        <span className=" text-font_black font-semibold text-lg">{pagesType}</span>
      )}
      <hr className=" border-border_grey w-full" />
    </div>
  );
};
Header.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default Header;
