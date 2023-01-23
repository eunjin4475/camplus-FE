import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavBtn, CategoryBtn, UniversityBtn } from './button';
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

// 대학교 선택 버튼
export const UniversityBtnList = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center items-center">
      <UniversityBtn
        text="숭실대학교"
        onClick={(event) => {
          event.preventDefault();
          navigate('ssu');
        }}
      />

      <UniversityBtn
        text="성신여자대학교"
        onClick={(event) => {
          event.preventDefault();
          navigate('sswu');
        }}
      />

      <BottomNavBtn
        text="한양대학교"
        onClick={(event) => {
          event.preventDefault();
          navigate('hyu');
        }}
      />
      <BottomNavBtn
        text="동덕여자대학교"
        onClick={(event) => {
          event.preventDefault();
          navigate('ddwu');
        }}
      />
    </div>
  );
};
