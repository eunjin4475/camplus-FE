import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ListItem = (props) => {
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

export default ListItem;
