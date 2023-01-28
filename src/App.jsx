import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Post from './pages/post';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import MyPage from './pages/myPage';
import Posting from './pages/posting';

const App = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    if (userData === null) {
      navigate('/');
    } else {
      navigate('/home');
    }
  }, []);

  return (
    <div className="App">
      <Routes forceRefresh>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home token={userData} />}>
          <Route path="/home/:category" element={<Home token={userData} />} />
        </Route>
        <Route path="/post" element={<Post token={userData} />} />
        <Route path="/mypage" element={<MyPage token={userData} />} />
        <Route path="/:id" element={<Posting token={userData} />} />
      </Routes>
    </div>
  );
};

export default App;
