import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BottomNavBtn, CategoryBtn } from './button';
import house from '../src_asset/House.png';
import plus from '../src_asset/Plus.png';
import vector from '../src_asset/Vector.png';

export const CategoryBtnList = () => {
  const navigate = useNavigate();
  return (
    <div className="h-categoryBtnListHeight items-start">
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
          navigate('student product');
        }}
      />
      <CategoryBtn
        text="분실물"
        onClick={(event) => {
          event.preventDefault();
          navigate('lost item');
        }}
      />
      <CategoryBtn
        text="그 외"
        onClick={(event) => {
          event.preventDefault();
          navigate('etx');
        }}
      />
    </div>
  );
};

export const CategoryBtnList2 = (props) => {
  const { onClick } = props;
  return (
    <div className="flex h-categoryBtnListHeight items-center">
      <CategoryBtn id="book" text="책" onClick={onClick} />
      <CategoryBtn id="charger" text="충전기" onClick={onClick} />
      <CategoryBtn id="calculator" text="계산기" onClick={onClick} />
      <CategoryBtn id="student product" text="학생용품" onClick={onClick} />
      <CategoryBtn id="lost item" text="분실물" onClick={onClick} />
      <CategoryBtn id="etx" text="그 외" onClick={onClick} />
    </div>
  );
};
CategoryBtnList2.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const UnivBtn = (props) => {
  const { onClick } = props;
  return (
    <div className="flex h-categoryBtnListHeight items-center">
      <CategoryBtn id="soongsil" text="숭실대" onClick={onClick} />
      <CategoryBtn id="dongduk" text="동덕여대" onClick={onClick} />
      <CategoryBtn id="sungshin" text="성신여대" onClick={onClick} />
      <CategoryBtn id="hanyang" text="한양대" onClick={onClick} />
    </div>
  );
};
UnivBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const BottomNavBtnList = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center items-center">
      <BottomNavBtn
        src={house}
        onClick={() => {
          navigate('/home');
        }}
      />

      <BottomNavBtn
        src={plus}
        onClick={() => {
          navigate('/post');
        }}
      />

      <BottomNavBtn
        src={vector}
        onClick={() => {
          navigate('/mypage');
        }}
      />
    </div>
  );
};
