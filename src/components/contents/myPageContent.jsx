import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyListData } from '../../redux/myListSlice';
import { ListItem } from '../listItem';

const MyPageContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyListData());
  }, []);
  const myListData = useSelector((state) => {
    return state.myList.list;
  });
  console.log(myListData);
  return (
    <div>
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
  );
};

export default MyPageContent;
