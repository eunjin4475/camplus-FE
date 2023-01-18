import axios from 'axios';
import React, { useState } from 'react';
import { SubmitEventBtn } from '../button';
import { InputItem } from '../inputItem';

const SignupContent = () => {
  const [signupData, setSignupData] = useState({
    nickname: '',
    username: '',
    password: '',
    password2: '',
    university: '',
  });
  console.log(signupData);
  return (
    <div className="flex flex-col justify-between items-center h-contentHeight">
      <form id="signup">
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
              return { ...prevState, password2: event.target.value };
            });
          }}
        />
        {/* 대학교 선택은 아이템 선택을 통해서 state 변경을 해주는 식으로 함. */}
        <InputItem
          itemType="대학교 선택"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, university: event.target.value };
            });
          }}
        />
        <SubmitEventBtn
          form="signup"
          text="작성완료"
          submitEvent={() => {
            axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/users/register/',
              data: {
                username: signupData.username,
                nickname: signupData.nickname,
                password: signupData.password,
                password2: signupData.password2,
                university: signupData.university,
              },
            })
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
      </form>
      <div className=" flex flex-col justify-center items-center" />
    </div>
  );
};

export default SignupContent;
