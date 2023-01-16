import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { Navbtn, Navbtn1 } from './button';
// import { getListData } from '../redux/listSlice';

export const CategoryBtn = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  return (
    <div>
      <Navbtn1
        text="책"
        onClick={(event) => {
          event.preventDefault();
          navigate('book');
          // dispatch(getListData('book'));
        }}
      />
      <Navbtn1
        text="충전기"
        onClick={(event) => {
          event.preventDefault();
          navigate('charger');
          // dispatch(getListData('charger'));
        }}
      />
      <Navbtn1
        text="계산기"
        onClick={(event) => {
          event.preventDefault();
          navigate('calculator');
          // dispatch(getListData('calculator'));
        }}
      />
      <Navbtn1
        text="학생용품"
        onClick={(event) => {
          event.preventDefault();
          navigate('supplies');
          // dispatch(getListData('supplies'));
        }}
      />
      <Navbtn1
        text="분실물"
        onClick={(event) => {
          event.preventDefault();
          navigate('lost');
          // dispatch(getListData('lost'));
        }}
      />
      <Navbtn1
        text="그 외"
        onClick={(event) => {
          event.preventDefault();
          navigate('exception');
          // dispatch(getListData('exception'));
        }}
      />
    </div>
  );
};

export const BottomNavBtn = (props) => {
  const { className } = props;
  const navigate = useNavigate();
  return (
    <div className={className}>
      <Navbtn
        text="홈"
        onClick={() => {
          navigate('/home');
        }}
      />
      <Navbtn
        text="+"
        onClick={() => {
          navigate('/post');
        }}
      />
      <Navbtn
        text="마이"
        onClick={() => {
          navigate('/mypage');
        }}
      />
    </div>
  );
};

BottomNavBtn.propTypes = {
  className: PropTypes.string.isRequired,
};
