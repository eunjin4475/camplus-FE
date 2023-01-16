import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Post from './pages/post';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import MyPage from './pages/myPage';

const userData = 'userData';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(userData);
    if (token) {
      navigate('/home');
    }
  }, []);
  navigate('/');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />}>
          <Route path="/home/:category" element={<Home />} />
        </Route>
        <Route path="/post" element={<Post />} />
        <Route path="/myPage" elememt={<MyPage />} />
      </Routes>
    </div>
  );
};

export default App;
