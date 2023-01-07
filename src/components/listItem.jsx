import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { title, nickname, category, location } = props;
  return (
    <div className="py-9 px-6 w-8/12 h-32 border-border_grey border-border_1 rounded-3xl flex justify-between items-center m-9">
      <div className="flex flex-col items-start justify-center">
        <span className="text-font_black text-lg font-semibold">
          {category} | {title}
        </span>
        <span className="text-font_item_grey text-sm">{nickname}</span>
      </div>
      <div className="text-font_black text-lg font-semibold">{location} !</div>
    </div>
  );
};
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ListItem;
