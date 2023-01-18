import React, { useState } from 'react';
import { postList } from '../../services/user.service';
import { SubmitEventBtn } from '../button';
import { PostInputItem } from '../inputItem';

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
      <form id="post">
        <PostInputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
          itemType="제목"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, title: event.target.value };
            });
          }}
        />
        <PostInputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
          itemType="카테고리"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, category: event.target.value };
            });
          }}
        />
        <PostInputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus mt-4"
          itemType="장소"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, location: event.target.value };
            });
          }}
        />
        <PostInputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemContentHeight border-subColor_grey border-border_md rounded-borderRadius_md flex justify-start items-center focus mt-4"
          itemType="요청"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, content: event.target.value };
            });
          }}
        />
      </form>
      <div>
        <SubmitEventBtn
          form="post"
          text="작성완료"
          submitEvent={() => {
            postList(postData);
          }}
        />
      </div>
    </div>
  );
};

export default PostContent;
