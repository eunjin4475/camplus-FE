import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Post from './pages/post';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import MyPage from './pages/myPage';
import Posting from './pages/posting';

const userData = 'userData';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(userData);
    if (token) {
      navigate('/home');
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />}>
          <Route path="/home/:category" element={<Home />} />
          <Route path="/home/:id" element={<Posting />} />
        </Route>
        <Route path="/post" element={<Post />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
};

export default App;
