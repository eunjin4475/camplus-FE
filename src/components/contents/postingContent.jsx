import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/listDataSlice';
import { PostingBodyListItem, PostingCommentListItem, PostingTitleListItem } from '../listItem';
import InputItem from '../inputItem';
import { MainBtn } from '../button';
import { postComment } from '../../services/user.service';

const PostingContent = () => {
  const url = useParams();
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState({
    post: url.id,
    text: '',
  });
  useEffect(() => {
    dispatch(getData(url.id));
  }, [postComment]);
  const singleListData = useSelector((state) => {
    return state.listData.data;
  });
  return (
    <div className="flex flex-col justify-center items-center overflow-auto">
      <PostingTitleListItem title={singleListData.title} />
      <PostingBodyListItem body={singleListData.body} />
      <div className="h-commentHeight overflow-auto mb-4">
        {singleListData.comments &&
          singleListData.comments.map((singleListDataComment) => {
            return (
              <PostingCommentListItem
                nickname={singleListDataComment.author.nickname}
                comment={singleListDataComment.text}
              />
            );
          })}
      </div>
      <form className="flex-row w-ItemWidth flex justify-between items-center">
        <InputItem
          className="py-9 px-8 w-ItemWidth h-postItemHeight border-subColor border-border_md rounded-borderRadius_sm flex justify-start items-center focus"
          itemType="댓글"
          onChange={(event) => {
            setCommentData((prevState) => {
              return { ...prevState, text: event.target.value };
            });
          }}
          placeHolder="댓글을 입력하세요."
        />
        <MainBtn
          text="보내기"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            postComment(commentData);
          }}
          buttonClassName=" w-categoryBtnWidth h-postItemHeight bg-mainColor rounded-borderRadius_sm"
          spanClassName="font-bold text-fontSize_md text-textColor_white"
        />
      </form>
    </div>
  );
};

export default PostingContent;
