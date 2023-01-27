import React from 'react';
import { logout } from '../services/auth.service';
import { MainBtn } from './button';
import logo from '../src_asset/logo.png';

const Header = () => {
  return (
    <>
      <img src={logo} alt="로고 이미지" className="w-logoWidth h-logoHeight" />
      <MainBtn
        text="로그아웃"
        type="submit"
        onClick={() => {
          logout();
          window.location.reload();
        }}
        buttonClassName=" w-categoryBtnWidth h-3 bg-mainColor rounded-borderRadius_sm"
        spanClassName="font-bold text-fontSize_sm text-fontColor_white"
      />
    </>
  );
};

export default Header;
