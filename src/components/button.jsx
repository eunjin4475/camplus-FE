import React from 'react';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const { text, submitEvent } = props;
  return (
    <button
      className="h-20 w-52 px-12 py-6 rounded-lg bg-font_green hover:bg-font_item_grey"
      type="submit"
      onClick={submitEvent}
    >
      <span className="font-semibold text-lg">{text}</span>
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  submitEvent: PropTypes.func.isRequired,
};

export default Btn;
