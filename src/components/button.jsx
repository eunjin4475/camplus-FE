import React from 'react';
import PropTypes from 'prop-types';

export const SubmitEventBtn = (props) => {
  const { text, submitEvent, form } = props;
  return (
    <button
      form={form}
      className=" w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg mt-4"
      type="submit"
      onClick={submitEvent}
    >
      <span className="font-bold text-fontSize_md text-fontColor_white">{text}</span>
    </button>
  );
};

export const SubmitEventBtn2 = (props) => {
  const { text, submitEvent } = props;
  return (
    <button
      className=" w-categoryBtnWidth h-2 h-mainBtnHeight bg-mainColor_yellow rounded-borderRadius_sm"
      type="submit"
      onClick={submitEvent}
    >
      <span className="font-bold text-fontSize_md text-fontColor_white">{text}</span>
    </button>
  );
};
SubmitEventBtn2.propTypes = {
  text: PropTypes.string.isRequired,
  submitEvent: PropTypes.func.isRequired,
};

export const MainBtn = (props) => {
  const { text, onClick } = props;
  return (
    <button
      className=" w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg mt-4"
      type="submit"
      onClick={onClick}
    >
      <span className="font-bold text-fontSize_md text-fontColor_white">{text}</span>
    </button>
  );
};

// 흰색 버튼(하단)
export const BottomNavBtn = (props) => {
  const { onClick, src } = props;
  // const navigate = useNavigate(`/${text}`);
  return (
    <button className="justify-around items-center px-40 py-2.5" type="button" onClick={onClick}>
      <img className=" w-bottomNavBtnImgWidth h-bottomNavBtnImgHeight" src={src} alt="navbtn" />
    </button>
  );
};

// 흰색 버튼(상단)
export const CategoryBtn = (props) => {
  const { text, onClick } = props;
  return (
    <button
      className="w-categoryBtnWidth h-categoryBtnHeight text-fontSize_sm bg-categoryBtnColor_grey rounded-borderRadius_lg mr-4"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

SubmitEventBtn.propTypes = {
  form: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  submitEvent: PropTypes.func.isRequired,
};

MainBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

BottomNavBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

CategoryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
