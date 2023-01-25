import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth.service';
import { MainBtn } from '../button';
import InputItem from '../inputItem';

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
          placeHolder="qwert12345"
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="닉네임"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, nickname: event.target.value };
            });
          }}
          placeHolder="홍길동"
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="비밀번호"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, password: event.target.value };
            });
          }}
          placeHolder="문자+숫자+8자리 이상"
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="비밀번호 확인"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, password2: event.target.value };
            });
          }}
          placeHolder="동일하게 입력"
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        {/* 대학교 선택은 아이템 선택을 통해서 state 변경을 해주는 식으로 함. */}
        <InputItem
          itemType="대학교 선택"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, university: event.target.value };
            });
          }}
          className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <MainBtn
          form="signup"
          text="작성완료"
          type="submit"
          buttonClassName="w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg mt-4"
          spanClassName="font-bold text-fontSize_md text-fontColor_white"
          onClick={(event) => {
            event.preventDefault();
            const signupResponse = signup(signupData);
            signupResponse
              .then(() => {
                navigate('/');
              })
              .catch((error) => {
                if (error.response.data.username) {
                  alert('아이디 부분에 문제가 있어요! 다시 확인해주세요!');
                }
                if (error.response.data.nickname) {
                  alert('닉네임 부분에 문제가 있어요! 다시 확인해주세요!');
                }
                if (error.response.data.password) {
                  alert('비밀번호 부분에 문제가 있어요! 다시 확인해주세요!');
                }
                if (error.response.data.university) {
                  alert('대학교 선택 부분에 문제가 있어요! 다시 확인해주세요!');
                }
              });
          }}
        />
      </form>
    </div>
  );
};

export default SignupContent;
