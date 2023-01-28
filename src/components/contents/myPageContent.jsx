import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainBtn } from '../button';
import { getMyListData } from '../../redux/myListSlice';
import { ListItem } from '../listItem';
import { logout } from '../../services/auth.service';

const MyPageContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyListData());
  }, []);
  const myListData = useSelector((state) => {
    return state.myList.list;
  });
  return (
    <>
      <div className="h-homeContentHeight overflow-auto">
        {myListData &&
          myListData.map((data) => {
            return (
              <ListItem
                pk={data.pk}
                title={data.title}
                nickname={data.author.nickname}
                category={data.category}
                location={data.location}
              />
            );
          })}
      </div>
      <MainBtn
        text="로그아웃"
        type="submit"
        onClick={() => {
          logout();
          window.location.reload();
        }}
        buttonClassName=" w-categoryBtnWidth h-categoryBtnHeight bg-mainColor rounded-borderRadius_sm mt-10"
        spanClassName="font-bold text-fontSize_sm text-textColor_white"
      />
    </>
  );
};

export default MyPageContent;
