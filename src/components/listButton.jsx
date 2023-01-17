import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BottomNavBtn, CategoryBtn } from './button';

export const CategoryBtnList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CategoryBtn
        text="책"
        onClick={(event) => {
          event.preventDefault();
          navigate('book');
        }}
      />
      <CategoryBtn
        text="충전기"
        onClick={(event) => {
          event.preventDefault();
          navigate('charger');
        }}
      />
      <CategoryBtn
        text="계산기"
        onClick={(event) => {
          event.preventDefault();
          navigate('calculator');
        }}
      />
      <CategoryBtn
        text="학생용품"
        onClick={(event) => {
          event.preventDefault();
          navigate('supplies');
        }}
      />
      <CategoryBtn
        text="분실물"
        onClick={(event) => {
          event.preventDefault();
          navigate('lost');
        }}
      />
      <CategoryBtn
        text="그 외"
        onClick={(event) => {
          event.preventDefault();
          navigate('exception');
        }}
      />
    </div>
  );
};

export const BottomNavBtnList = (props) => {
  const { className } = props;
  const navigate = useNavigate();
  return (
    <div className={className}>
      <BottomNavBtn
        text="홈"
        onClick={() => {
          navigate('/home');
        }}
      />
      <BottomNavBtn
        text="+"
        onClick={() => {
          navigate('/post');
        }}
      />
      <BottomNavBtn
        text="마이"
        onClick={() => {
          navigate('/mypage');
        }}
      />
    </div>
  );
};

BottomNavBtnList.propTypes = {
  className: PropTypes.string.isRequired,
};
