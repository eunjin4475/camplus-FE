import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postList } from '../../services/user.service';
import { MainBtn } from '../button';
import InputItem from '../inputItem';

const PostContent = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    category: '',
    location: '',
    body: '',
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <form id="post">
        <InputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex justify-start items-center focus mt-4"
          itemType="제목"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, title: event.target.value };
            });
          }}
        />
        <InputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex justify-start items-center focus mt-4"
          itemType="카테고리"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, category: event.target.value };
            });
          }}
        />
        <InputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex justify-start items-center focus mt-4"
          itemType="장소"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, location: event.target.value };
            });
          }}
        />
        <InputItem
          className=" py-9 px-8 w-inputItemWidth h-postInputItemContentHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex justify-start items-center focus mt-4"
          itemType="요청"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, body: event.target.value };
            });
          }}
        />
      </form>
      <div>
        <MainBtn
          form="post"
          text="작성완료"
          type="submit"
          buttonClassName="w-mainBtnWidth h-mainBtnHeight bg-mainColor_yellow px-48 py-4 rounded-borderRadius_lg mt-4"
          spanClassName="font-bold text-fontSize_md text-fontColor_white"
          onClick={(e) => {
            e.preventDefault();
            const postResponse = postList(postData);
            postResponse
              .then((res) => {
                console.log(res);
                navigate('/home');
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
      </div>
    </div>
  );
};

export default PostContent;
