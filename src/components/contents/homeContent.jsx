import React from 'react';
import ListItem from '../listItem';

const HomeContent = () => {
  const listData = [
    {
      id: 13232,
      title: '알고리즘 빌려주실 분',
      nickname: '달달커피',
      catigory: '책',
      location: '중앙도서관',
    },
    {
      id: 13232,
      title: '알고리즘 빌려주실 분',
      nickname: '달달커피',
      catigory: '책',
      location: '중앙도서관',
    },
    {
      id: 13232,
      title: '알고리즘 빌려주실 분',
      nickname: '달달커피',
      catigory: '책',
      location: '중앙도서관',
    },
    {
      id: 13232,
      title: '알고리즘 빌려주실 분',
      nickname: '달달커피',
      catigory: '책',
      location: '중앙도서관',
    },
    {
      id: 13232,
      title: '알고리즘 빌려주실 분',
      nickname: '달달커피',
      catigory: '책',
      location: '중앙도서관',
    },
  ];
  return (
    <div>
      {listData &&
        listData.map((a) => {
          return (
            <ListItem
              id={a.id}
              title={a.title}
              nickname={a.nickname}
              category={a.catigory}
              location={a.location}
              onClick={(event) => {
                console.log(event.id);
              }}
            />
          );
        })}
    </div>
  );
};

export default HomeContent;
