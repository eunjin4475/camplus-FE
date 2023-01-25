import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import arrow from '../src_asset/Arrow.png';

export const MainBtn = (props) => {
  const { form, text, type, buttonClassName, spanClassName, onClick } = props;
  return (
    <button
      form={form}
      className={buttonClassName}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      <span className={spanClassName}>{text}</span>
    </button>
  );
};
MainBtn.propTypes = {
  form: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
  spanClassName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const BottomNavBtn = (props) => {
  const { onClick, src } = props;
  return (
    <button className="justify-around items-center px-40 py-2.5" type="button" onClick={onClick}>
      <img className=" w-bottomNavBtnImgWidth h-bottomNavBtnImgHeight" src={src} alt="navbtn" />
    </button>
  );
};
BottomNavBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export const CategoryBtn = (props) => {
  const { id, text, onClick } = props;
  return (
    <button
      id={id}
      className="w-categoryBtnWidth h-categoryBtnHeight text-fontSize_sm bg-categoryColor rounded-borderRadius_lg mr-4"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
CategoryBtn.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const ExitBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="justify-around items-center"
      type="button"
      onClick={() => {
        navigate('/home');
      }}
    >
      <img className=" w-16.32 h-16.32 " src={arrow} alt="outbtn" />
    </button>
  );
};
