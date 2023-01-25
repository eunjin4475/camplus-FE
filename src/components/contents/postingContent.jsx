import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/listDataSlice';
import { PostingBodyListItem, PostingCommentListItem, PostingTitleListItem } from '../listItem';
import { PostInputItem } from '../inputItem';
import { SubmitEventBtn2 } from '../button';
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
                nickname={singleListDataComment.profile.nickname}
                comment={singleListDataComment.text}
              />
            );
          })}
      </div>
      <form className="flex-row w-inputItemWidth flex justify-between items-center">
        <PostInputItem
          className="py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_sm flex justify-start items-center focus"
          itemType="댓글"
          onChange={(event) => {
            setCommentData((prevState) => {
              return { ...prevState, text: event.target.value };
            });
          }}
        />
        <SubmitEventBtn2
          text="보내기"
          submitEvent={(event) => {
            event.preventDefault();
            postComment(commentData);
          }}
        />
      </form>
    </div>
  );
};

export default PostingContent;
