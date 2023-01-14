import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import { getListData } from '../../redux/listSlice';

const HomeContent = () => {
  const { category } = useParams();
  // 값을 가져올 때
  const dispatch = useDispatch();
  const listData = useSelector((state) => {
    return state.lists.value;
  });
  const status = useSelector((state) => {
    return state.lists.status;
  });
  dispatch(getListData(category));
  console.log(listData);
  console.log(status);

  return (
    <Routes>
      <Route path="book" element={<div>{category}</div>} />
      <Route path="charger" element={<div>{category}</div>} />
      <Route path="calculator" element={<div>{category}</div>} />
      <Route path="supplies" element={<div>{category}</div>} />
      <Route path="lost" element={<div>{category}</div>} />
      <Route path="exception" element={<div>{category}</div>} />
    </Routes>
  );
};

export default HomeContent;
