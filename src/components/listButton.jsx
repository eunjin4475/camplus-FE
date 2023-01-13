import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbtn1 } from './button';

/**
 * @기능구현 onClick시 navigate 이동
 */

const CategoryBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbtn1
        text="책"
        onClick={(event) => {
          event.preventDefault();
          navigate('book');
        }}
      />
      <Navbtn1
        text="충전기"
        onClick={(event) => {
          event.preventDefault();
          navigate('charger');
        }}
      />
      <Navbtn1
        text="계산기"
        onClick={(event) => {
          event.preventDefault();
          navigate('calculator');
        }}
      />
      <Navbtn1
        text="학생용품"
        onClick={(event) => {
          event.preventDefault();
          navigate('supplies');
        }}
      />
      <Navbtn1
        text="분실물"
        onClick={(event) => {
          event.preventDefault();
          navigate('lost');
        }}
      />
      <Navbtn1
        text="그 외"
        onClick={(event) => {
          event.preventDefault();
          navigate('exception');
        }}
      />
    </div>
  );
};

export default CategoryBtn;
