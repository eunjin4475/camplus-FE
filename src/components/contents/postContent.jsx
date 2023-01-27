import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postList } from '../../services/user.service';
import { MainBtn } from '../button';
import { CategoryBtnList2 } from '../buttonList';
import { InputItem, PostBodyInputItem } from '../inputItem';

const PostContent = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    category: '',
    location: '',
    body: '',
  });
  console.log(postData);
  return (
    <div className="flex flex-col justify-center items-center">
      <form id="post">
        <InputItem
          className=" py-9 px-8 w-ItemWidth h-postItemHeight border-subColor border-border_md rounded-borderRadius_sm flex justify-start items-center focus mt-4"
          itemType="제목"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, title: event.target.value };
            });
          }}
        />
        <div className="px-8 w-ItemWidth h-postItemHeight border-subColor border-border_md rounded-borderRadius_sm flex justify-center items-center focus mt-4">
          <CategoryBtnList2
            onClick={(event) => {
              setPostData((prevState) => {
                return { ...prevState, category: event.target.id };
              });
            }}
          />
        </div>
        <InputItem
          className=" py-9 px-8 w-ItemWidth h-postItemHeight border-subColor border-border_md rounded-borderRadius_sm flex justify-start items-center focus mt-4"
          itemType="장소"
          onChange={(event) => {
            setPostData((prevState) => {
              return { ...prevState, location: event.target.value };
            });
          }}
        />
        <PostBodyInputItem
          className=" py-6 px-8 w-ItemWidth h-postItemBodyHeight border-subColor border-border_md rounded-borderRadius_sm flex flex-col justify-start items-start focus mt-4"
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
          buttonClassName="w-mainBtnWidth h-mainBtnHeight bg-mainColor px-48 py-4 rounded-borderRadius_lg mt-4"
          spanClassName="font-bold text-fontSize_md text-textColor_white"
          onClick={(e) => {
            e.preventDefault();
            const postResponse = postList(postData);
            postResponse
              .then(() => {
                navigate('/home');
              })
              .catch(() => {});
          }}
        />
      </div>
    </div>
  );
};

export default PostContent;
