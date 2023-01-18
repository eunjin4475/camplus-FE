import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';
import { MainBtn, SubmitEventBtn } from '../button';
import InputItem from '../inputItem';
/**
 * @추가할것 빈값이 넘어가지 않도록 validation 설정하기
 */
const SigninContent = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-evenly items-center h-contentHeight">
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
      <div className=" flex flex-col justify-center items-center">
        <SubmitEventBtn
          form="signin"
          text="로그인"
          submitEvent={() => {
            login(account);
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
