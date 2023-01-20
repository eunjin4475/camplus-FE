import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/listDataSlice';

const PostingContent = () => {
  const url = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(url.id));
  }, []);
  const listData = useSelector((state) => {
    return state.listData.data;
  });
  console.log(listData);
  return <div />;
};

export default PostingContent;
