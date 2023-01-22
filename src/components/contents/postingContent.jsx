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
  const [commentData, setCommentData] = useState('');
  useEffect(() => {
    dispatch(getData(url.id));
  }, [postComment]);
  const listData = useSelector((state) => {
    return state.listData.data;
  });
  console.log(listData);
  return (
    <div>
      <PostingTitleListItem title={listData.title} />
      <PostingBodyListItem body={listData.body} />
      <span>댓글</span>
      <div>
        {listData.comment &&
          listData.comment.map((data) => {
            return <PostingCommentListItem nickname={data.nickname} comment={data.comment} />;
          })}
      </div>
      <form className="flex-row flex justify-between items-center">
        <PostInputItem
          className="py-9 px-8 w-inputItemWidth h-postInputItemHeight border-subColor_grey border-border_md rounded-borderRadius_lg flex justify-start items-center focus"
          itemType="댓글"
          onChange={(event) => {
            setCommentData(event.target.value);
          }}
        />
        <SubmitEventBtn2
          text="보내기"
          submitEvent={(e) => {
            e.preventDefault();
            postComment(commentData);
          }}
        />
      </form>
    </div>
  );
};

export default PostingContent;
