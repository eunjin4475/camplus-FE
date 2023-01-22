import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ListItem = (props) => {
  const navigate = useNavigate();
  const { pk, title, nickname, category, location } = props;
  return (
    <div
      className="w-inputItemWidth h-listItemHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex flex-col justify-start items-start mb-3 cursor-pointer"
      aria-hidden="true"
      onClick={() => {
        navigate(`/${pk}`);
      }}
    >
      <div className=" py-6 px-6 flex flex-col items-start justify-center">
        <span className="text-fontSize_lg text-fontColor_black font-bold">{title}!</span>
        <span className="text-fontSize_ssm text-fontColor_grey">{nickname}</span>
        <span className="text-fontSize_sm text-fontColor_grey">
          #{category} #{location} 앞
        </span>
      </div>
    </div>
  );
};
ListItem.propTypes = {
  pk: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export const PostingTitleListItem = (props) => {
  const { title } = props;
  return (
    <div className=" p-5 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex justify-start mb-4">
      <span className="font-semibold text-fontSize_md text-fontColor_black">{title}</span>
    </div>
  );
};
PostingTitleListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export const PostingBodyListItem = (props) => {
  const { body } = props;
  return (
    <div className="p-5 w-inputItemWidth h-postInputItemContentHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex flex-col items-start mb-4">
      <span className="font-bold text-fontSize_lg text-fontColor_black">요청사항</span>
      <p className="font-semibold text-fontSize_md text-fontColor_black mt-4">{body}</p>
    </div>
  );
};
PostingBodyListItem.propTypes = {
  body: PropTypes.string.isRequired,
};

export const PostingCommentListItem = (props) => {
  const { nickname, comment } = props;
  return (
    <div
      id="inputItem"
      className="py-9 px-8 w-inputItemWidth h-inputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
    >
      <span className=" text-fontSize_md text-fontColor_Black font-semibold">{nickname}</span>
      <span className=" text-fontSize_lg text-subColor_grey font-semibold ml-2"> : </span>
      <span className="ml-2 w-auto">{comment}</span>
    </div>
  );
};
PostingCommentListItem.propTypes = {
  nickname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};
