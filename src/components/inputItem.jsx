import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const InputItem = (props) => {
  const { itemType, onChange } = props;
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div
      id="inputItem"
      className="py-9 px-6 w-8/12 h-24 border-border_grey border-border_1 rounded-3xl flex justify-start items-center m-4 focus"
    >
      <span className="text-font_item_grey text-lg font-semibold">{itemType} | </span>
      {itemType === '아이디' && (
        <input
          id="usernameInput"
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '비밀번호' && (
        <input
          id="passwordInput"
          className="focus:outline-none ml-2 w-auto"
          required
          type="password"
          ref={inputRef}
        />
      )}
    </div>
  );
};
InputItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputItem;
