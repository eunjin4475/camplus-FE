import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth.service';
import { SubmitEventBtn } from '../button';
import { InputItem } from '../inputItem';

const SignupContent = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: '',
    nickname: '',
    password: '',
    password2: '',
    university: '',
  });
  return (
    <div className="flex flex-col justify-between items-center h-contentHeight">
      <form id="signup">
        <InputItem
          itemType="아이디"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, username: event.target.value };
            });
          }}
        />
        <InputItem
          itemType="닉네임"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, nickname: event.target.value };
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
          submitEvent={async (e) => {
            e.preventDefault();
            const response = await signup(signupData);
            if (response.status === 201) {
              navigate('/');
            }
          }}
        />
      </form>
      <div className=" flex flex-col justify-center items-center" />
    </div>
  );
};

export default SignupContent;
