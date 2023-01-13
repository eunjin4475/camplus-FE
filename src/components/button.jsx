import React from 'react';
import PropTypes from 'prop-types';

export const Btn = (props) => {
  const { text, submitEvent } = props;
  return (
    <button
      className="h-20 w-52 px-12 py-6 rounded-lg bg-font_orange"
      type="submit"
      onClick={submitEvent}
    >
      <span className="font-semibold text-lg">{text}</span>
    </button>
  );
};

// 흰색 버튼(하단)
export const Navbtn = (props) => {
  const { text, onClick } = props;
  // const navigate = useNavigate(`/${text}`);
  return (
    <button
      className="inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-lg"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// 흰색 버튼(상단)
export const Navbtn1 = (props) => {
  const { text, onClick } = props;
  return (
    <button
      className=" border hover:bg-btn_bg_green font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  submitEvent: PropTypes.func.isRequired,
};

Navbtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Navbtn1.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
