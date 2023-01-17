import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainBtn } from '../button';
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
  console.log(account);
  return (
    <div className="flex flex-col justify-center items-center mt-24">
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
      <MainBtn
        text="로그인"
        submitEvent={() => {
          console.log(1);
        }}
      />
      <MainBtn
        text="회원가입"
        submitEvent={() => {
          navigate('/signup');
        }}
      />
    </div>
  );
};

export default SigninContent;
