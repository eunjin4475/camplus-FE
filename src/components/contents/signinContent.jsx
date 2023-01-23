import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';
import { MainBtn, SubmitEventBtn } from '../button';
import { InputItem } from '../inputItem';

const SigninContent = () => {
  const [account, setAccount] = useState({
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
            setAccount((prevState) => {
              return { ...prevState, username: event.target.value };
            });
          }}
        />
        <InputItem
          itemType="비밀번호"
          onChange={(event) => {
            setAccount((prevState) => {
              return { ...prevState, password: event.target.value };
            });
          }}
        />
      </form>
      {isLogin === true && (
        <span className="font-bold text-fontSize_md text-fontColor_red">
          값을 정확히 입력해주세요!
        </span>
      )}
      <div className=" flex flex-col justify-center items-center">
        <SubmitEventBtn
          form="signin"
          text="로그인"
          submitEvent={(e) => {
            e.preventDefault();
            const loginResponse = login(account);
            loginResponse
              .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/home');
              })
              .catch(() => {
                setIsLogin(true);
              });
          }}
        />
        <MainBtn
          text="회원가입"
          onClick={() => {
            navigate('/signup');
          }}
        />
      </div>
    </div>
  );
};

export default SigninContent;
