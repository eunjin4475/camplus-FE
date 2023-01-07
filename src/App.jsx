import React from 'react';
import './App.css';
import Btn from './components/button';

const App = () => {
  return (
    <div className="App">
      <Btn
        text="버튼"
        submitEvent={() => {
          console.log(1);
        }}
      />
    </div>
  );
};

export default App;
