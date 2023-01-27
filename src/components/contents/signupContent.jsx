import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth.service';
import { MainBtn } from '../button';
import { UnivBtn } from '../buttonList';
import { InputItem } from '../inputItem';

const SignupContent = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: '',
    nickname: '',
    password: '',
    password2: '',
    university: '',
    email: '',
  });
  console.log(signupData);

  return (
    <div className="flex flex-col justify-evenly items-center">
      <form id="signup" className="overflow-auto h-signupContentHeight mb-10">
        <InputItem
          itemType="아이디"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, username: event.target.value };
            });
          }}
          placeHolder="qwert12345"
          className="py-9 px-8 w-ItemWidth h-inputItemHeight border-subColor border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="닉네임"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, nickname: event.target.value };
            });
          }}
          placeHolder="홍길동"
          className=" py-9 px-8 w-ItemWidth h-inputItemHeight border-subColor border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="비밀번호"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, password: event.target.value };
            });
          }}
          placeHolder="문자+숫자+8자리 이상"
          className="py-9 px-8 w-ItemWidth h-inputItemHeight border-subColor border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <InputItem
          itemType="비밀번호 확인"
          onChange={(event) => {
            setSignupData((prevState) => {
              return { ...prevState, password2: event.target.value };
            });
          }}
          placeHolder="동일하게 입력"
          className="py-9 px-8 w-ItemWidth h-inputItemHeight border-subColor border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
        />
        <div className="px-8 w-ItemWidth h-inputItemHeight border-subColor border-border_md rounded-borderRadius_lg flex justify-start items-center focus my-4">
          <UnivBtn
            onClick={(event) => {
              setSignupData((prevState) => {
                return { ...prevState, university: event.target.id };
              });
            }}
          />
        </div>
        {signupData.university !== '' ? (
          <div className="flex flex-row justify-center items-center relative">
            <InputItem
              itemType="이메일 입력"
              onChange={(event) => {
                setSignupData((prevState) => {
                  return {
                    ...prevState,
                    email: `${event.target.value}@${signupData.university}.ac.kr`,
                  };
                });
              }}
              className=" py-9 px-8 w-ItemWidth h-inputItemHeight border-subColor border-border_md rounded-borderRadius_lg flex justify-start items-center focus"
            />
            <span className=" absolute w-auto left-1/3 justify-center items-center">{`@${signupData.university}.ac.kr`}</span>
          </div>
        ) : null}
      </form>
      <MainBtn
        form="signup"
        text="작성완료"
        type="submit"
        buttonClassName="w-mainBtnWidth h-mainBtnHeight bg-mainColor px-48 py-4 rounded-borderRadius_lg mt-4"
        spanClassName="font-bold text-textSize_md text-textColor_white"
        onClick={(event) => {
          event.preventDefault();
          const signupResponse = signup(signupData);
          signupResponse
            .then(() => {
              navigate('/');
            })
            .catch((error) => {
              console.log(error);
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
    </div>
  );
};

export default SignupContent;
