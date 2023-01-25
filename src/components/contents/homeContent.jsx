import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import { getListData } from '../../redux/listSlice';
import { CategoryBtnList } from '../buttonList';
import { ListItem } from '../listItem';

const HomeContent = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListData(category));
  }, [category]);
  const listData = useSelector((state) => {
    return state.lists.list;
  });

  return (
    <>
      <CategoryBtnList />
      <div className=" h-homeContentHeight overflow-auto">
        <Routes>
          <Route
            path=""
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
          <Route
            path="book"
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
          <Route
            path="charger"
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
          <Route
            path="calculator"
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
          <Route
            path="supplies"
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
          <Route
            path="lost"
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
          <Route
            path="exception"
            element={
              <div>
                {listData &&
                  listData.map((data) => {
                    return (
                      <ListItem
                        pk={data.pk}
                        title={data.title}
                        nickname={data.profile.nickname}
                        category={data.category}
                        location={data.location}
                      />
                    );
                  })}
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default HomeContent;
