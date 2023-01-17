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
      className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus"
    >
      <span className=" text-fontSize_sm text-fontColor_Black font-semibold">{itemType}</span>
      <span className=" text-fontSize_md text-subColor_grey font-semibold ml-2"> - </span>
      {itemType === '닉네임' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '아이디' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '비밀번호' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="password"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '비밀번호 확인' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="password"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '대학교 선택' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '제목' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '카테고리' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '장소' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
        />
      )}
      {itemType === '요청' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          ref={inputRef}
          onChange={onChange}
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
