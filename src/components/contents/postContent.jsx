import React, { useState } from 'react';
import InputItem from '../inputItem';

const PostContent = () => {
  const [postData, setPostData] = useState({
    title: '',
    category: '',
    location: '',
    content: '',
  });
  console.log(postData);
  return (
    <div className="flex flex-col justify-center items-center">
      <InputItem
        itemType="제목"
        onChange={(event) => {
          setPostData((prevState) => {
            return { ...prevState, title: event.target.value };
          });
        }}
      />
      <InputItem
        itemType="카테고리"
        onChange={(event) => {
          setPostData((prevState) => {
            return { ...prevState, category: event.target.value };
          });
        }}
      />
      <InputItem
        itemType="장소"
        onChange={(event) => {
          setPostData((prevState) => {
            return { ...prevState, location: event.target.value };
          });
        }}
      />
      <InputItem
        itemType="요청"
        onChange={(event) => {
          setPostData((prevState) => {
            return { ...prevState, content: event.target.value };
          });
        }}
      />
    </div>
  );
};

export default PostContent;
