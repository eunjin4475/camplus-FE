import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/listDataSlice';
import { PostingBodyListItem, PostingCommentListItem, PostingTitleListItem } from '../listItem';
import { InputItem } from '../inputItem';
import { MainBtn } from '../button';
import { postComment, deleteList } from '../../services/user.service';

const PostingContent = () => {
  const url = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [commentData, setCommentData] = useState({
    post: url.id,
    text: '',
  });
  const singleListData = useSelector((state) => {
    return state.listData.data;
  });

  useEffect(() => {
    dispatch(getData(url.id));
  }, [postComment]);

  return (
    <div className="flex flex-col justify-center items-center overflow-auto">
      <PostingTitleListItem title={singleListData.title} />
      <PostingBodyListItem body={singleListData.body} />
      {singleListData.author && userData.nickname === singleListData.author.nickname ? (
        <MainBtn
          text="삭제"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const deleteResponse = deleteList(url.id);
            deleteResponse
              .then(() => {
                navigate('/home');
              })
              .catch(() => {});
          }}
          buttonClassName=" w-categoryBtnWidth h-categoryBtnHeight bg-mainColor rounded-borderRadius_sm"
          spanClassName="font-bold text-fontSize_sm text-textColor_white"
        />
      ) : null}
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
