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
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [token]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home token={token} />}>
          <Route path="/home/:category" element={<Home token={token} />} />
        </Route>
        <Route path="/post" element={<Post token={token} />} />
        <Route path="/mypage" element={<MyPage token={token} />} />
        <Route path="/:id" element={<Posting token={token} />} />
      </Routes>
    </div>
  );
};

export default App;
