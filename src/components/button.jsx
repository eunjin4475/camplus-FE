import React from 'react';
import PropTypes from 'prop-types';

export const MainBtn = (props) => {
  const { text, submitEvent } = props;
  return (
    <button
      className=" w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg"
      type="submit"
      onClick={submitEvent}
    >
      <span className="font-semibold text-fontSize_sm text-fontColor_white">{text}</span>
    </button>
  );
};

// 흰색 버튼(하단)
export const BottomNavBtn = (props) => {
  const { onClick, src } = props;
  // const navigate = useNavigate(`/${text}`);
  return (
    <button
      className="justify-around items-center ml-20 px-48 py-2.5  font-medium leading-tight uppercase rounded shadow-lg"
      type="button"
      onClick={onClick}
    >
      <img src={src} alt="navbtn" />
    </button>
  );
};

// 흰색 버튼(상단)
export const CategoryBtn = (props) => {
  const { text, onClick } = props;
  return (
    <button
      className=" border hover:bg-btn_bg_green font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MainBtn.propTypes = {
  text: PropTypes.string.isRequired,
  submitEvent: PropTypes.func.isRequired,
};

BottomNavBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

CategoryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
