import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

const HomeContent = () => {
  const { category } = useParams();
  // const [listData, setListData] = useState([]);
  // useEffect(async () => {
  //   const result = await axios.get(`/list/${category}`);
  //   setListData(result.json());
  //   return category;
  // }, []);
  // useEffect(() => {
  //   console.log(listData);
  // }, []);
  // console.log(category);

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
