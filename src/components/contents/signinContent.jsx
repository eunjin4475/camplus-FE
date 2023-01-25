import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';
import { MainBtn } from '../button';
import InputItem from '../inputItem';

const SigninContent = () => {
  const [signinData, setSigninData] = useState({
    username: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-evenly items-center">
      <form id="signin">
        <InputItem
          itemType="아이디"
          onChange={(event) => {
            setSigninData((prevState) => {
              return { ...prevState, username: event.target.value };
            });
          }}
          placeHolder="아이디를 입력하세요."
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="비밀번호"
          onChange={(event) => {
            setSigninData((prevState) => {
              return { ...prevState, password: event.target.value };
            });
          }}
          placeHolder="비밀번호를 입력하세요."
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
      </form>
      {isLogin === true && (
        <span className="font-bold text-fontSize_md text-fontColor_red">
          값을 정확히 입력해주세요!
        </span>
      )}
      <div className=" flex flex-col justify-center items-center">
        <MainBtn
          form="signin"
          text="로그인"
          type="submit"
          buttonClassName="w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg mt-4"
          spanClassName="font-bold text-fontSize_md text-fontColor_white"
          onClick={(e) => {
            e.preventDefault();
            const loginResponse = login(signinData);
            loginResponse
              .then((res) => {
                localStorage.setItem('userData', JSON.stringify(res.data));
                navigate('/home');
              })
              .catch(() => {
                setIsLogin(true);
              });
          }}
        />
        <MainBtn
          text="회원가입"
          type="button"
          onClick={() => {
            navigate('/signup');
          }}
          buttonClassName="w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg mt-4"
          spanClassName="font-bold text-fontSize_md text-fontColor_white"
        />
      </div>
    </div>
  );
};

export default SigninContent;
