import React from 'react';
import logo from './logo.svg';
import './App.css';
import Technologies from "./pkg/Technologies";
import Header from "./pkg/header";

const App = () => {
  return (
      <div>
        <Header />
        <div className="App">
          <Technologies />
        </div>
      </div>
  );
};

export default App;
