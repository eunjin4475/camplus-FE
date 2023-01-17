import React from 'react';
import PropTypes from 'prop-types';
import logo from '../src_asset/logo.png';

const Header = (props) => {
  const { pagesType } = props;
  return (
    <div className="flex flex-col justify-evenly items-center py-14">
      <img src={logo} alt="로고 이미지" className="w-logoWidth h-logoHeight" />
      {pagesType !== '로그인' && <span className="text-fontSize_md mt-4">{pagesType}</span>}
    </div>
  );
};
Header.propTypes = {
  pagesType: PropTypes.string.isRequired,
};

export default Header;
