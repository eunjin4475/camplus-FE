import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyListData } from '../../redux/myListSlice';

const MyPageContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyListData());
  }, []);
  const myList = useSelector((state) => {
    return state.myList.list;
  });
  console.log(myList);
  return <div />;
};

export default MyPageContent;
