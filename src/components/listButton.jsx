import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Navbtn, Navbtn1 } from './button';
import house from '../src_asset/House.png';
import plus from '../src_asset/Plus.png';
import vector from '../src_asset/Vector.png';

export const CategoryBtn = () => {
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

export const BottomNavBtn = (props) => {
  const { className } = props;
  const navigate = useNavigate();
  return (
    <div className={className}>
      <Navbtn
        src={house}
        onClick={() => {
          navigate('/home');
        }}
      />
      <Navbtn
        src={plus}
        onClick={() => {
          navigate('/post');
        }}
      />
      <Navbtn
        src={vector}
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
