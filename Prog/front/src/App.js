import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SimsList from "./components/SimsList/SimsList";
import Dialogs from "./components/Dialogs/Dialogs";
import Help from "./components/Help/Help";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/sims" component={SimsList} />
          <Route path="/messages" component={Dialogs} />
          <Route path="/help" component={Help} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
