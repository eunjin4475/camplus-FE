import React, { useState } from 'react';
import InputItem from '../inputItem';

const SignupContent = () => {
  const [signupData, setSignupData] = useState({
    nickname: '',
    username: '',
    password: '',
    passwordOk: false,
    univ: '',
  });
  console.log(signupData);
  return (
    <div>
      <InputItem
        itemType="닉네임"
        onChange={(event) => {
          setSignupData((prevState) => {
            return { ...prevState, nickname: event.target.value };
          });
        }}
      />
      <InputItem
        itemType="아이디"
        onChange={(event) => {
          setSignupData((prevState) => {
            return { ...prevState, username: event.target.value };
          });
        }}
      />
      <InputItem
        itemType="비밀번호"
        onChange={(event) => {
          setSignupData((prevState) => {
            return { ...prevState, password: event.target.value };
          });
        }}
      />
      <InputItem
        itemType="비밀번호 확인"
        onChange={(event) => {
          setSignupData((prevState) => {
            if (signupData.password === event.target.value) {
              return { ...prevState, passwordOk: true };
            }
            return { ...prevState, passwordOk: false };
          });
          // passwordOk 여부에 따른 span 처리 필요함.
        }}
      />
      {/* 대학교 선택은 아이템 선택을 통해서 state 변경을 해주는 식으로 함. */}
      <InputItem
        itemType="대학교 선택"
        onChange={(event) => {
          setSignupData((prevState) => {
            return { ...prevState, univ: event.target.value };
          });
        }}
      />
    </div>
  );
};

export default SignupContent;