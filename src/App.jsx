import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Post from './pages/post';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

/**
 * @add 이것도 그러면 로컬스토리지의 내용을 통해서 분기해야되나?
 */
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
