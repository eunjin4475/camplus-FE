import React from 'react';
import PropTypes from 'prop-types';

export const InputItem = (props) => {
  const { itemType, placeHolder, className, onChange } = props;
  return (
    <div id="inputItem" className={className}>
      <span className=" text-fontSize_md text-textColor_black font-semibold">{itemType}</span>
      <span className=" text-fontSize_lg text-subColor font-semibold ml-2"> : </span>
      {itemType === '닉네임' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          onChange={onChange}
          placeholder={placeHolder}
        />
      )}
      {itemType === '아이디' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          onChange={onChange}
          placeholder={placeHolder}
        />
      )}
      {itemType === '비밀번호' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="password"
          onChange={onChange}
          placeholder={placeHolder}
        />
      )}
      {itemType === '비밀번호 확인' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="password"
          onChange={onChange}
          placeholder={placeHolder}
        />
      )}
      {itemType === '이메일 입력' && (
        <input className="focus:outline-none ml-2 w-150" required type="text" onChange={onChange} />
      )}
      {itemType === '제목' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          onChange={onChange}
        />
      )}
      {itemType === '장소' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          onChange={onChange}
        />
      )}
      {itemType === '요청' && (
        <input className="flex focus:outline-none ml-2 " required type="text" onChange={onChange} />
      )}
      {itemType === '댓글' && (
        <input
          className="focus:outline-none ml-2 w-auto"
          required
          type="text"
          onChange={onChange}
        />
      )}
    </div>
  );
};
InputItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const PostBodyInputItem = (props) => {
  const { className, onChange } = props;
  return (
    <div className={className}>
      <span className=" text-fontSize_md text-textColor_black font-semibold">요청</span>
      <input className="focus:outline-none w-full mt-4" required type="text" onChange={onChange} />
    </div>
  );
};
PostBodyInputItem.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
