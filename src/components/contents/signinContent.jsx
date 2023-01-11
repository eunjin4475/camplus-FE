import React, { useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import { Btn, Joinbtn } from '../button';
import InputItem from '../inputItem';
/**
 * @추가할것 pw 안 먹임
 */
const SigninContent = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
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
      <Btn
        text="로그인"
        submitEvent={() => {
          console.log(1);
        }}
      />

      <Joinbtn
        text="회원가입"
        submitEvent={() => {
          console.log(1);
        }}
      />
    </div>
  );
};
export default SigninContent;
