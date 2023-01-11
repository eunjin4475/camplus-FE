import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbtn1 } from './button';

const ListButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbtn1
        text="책"
        submitEvent={(event) => {
          event.preventDefault();
          navigate(`/home/book`);
        }}
      />
      <Navbtn1
        text="충전기"
        submitEvent={(event) => {
          event.preventDefault();
          navigate(`/home/charger`);
        }}
      />
      <Navbtn1
        text="계산기"
        submitEvent={(event) => {
          event.preventDefault();
          navigate(`/home/calculator`);
        }}
      />
      <Navbtn1
        text="학생용품"
        submitEvent={(event) => {
          event.preventDefault();
          navigate(`/home/supplies`);
        }}
      />
      <Navbtn1
        text="분실물"
        submitEvent={(event) => {
          event.preventDefault();
          navigate(`/home/lost`);
        }}
      />
      <Navbtn1
        text="그 외"
        submitEvent={(event) => {
          event.preventDefault();
          navigate(`/home/exception`);
        }}
      />
    </div>
  );
};

export default ListButton;
