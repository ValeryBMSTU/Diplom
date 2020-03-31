import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SimsList from "./components/SimsList/SimsList";
import Dialogs from "./components/Dialogs/Dialogs";
import Help from "./components/Help/Help";
import {Route} from "react-router-dom";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path="/profile" render={ () => <Profile data={props.data} addSim={props.addSim} />} />
          <Route path="/settings" component={Settings} />
          <Route path="/sims" component={SimsList} />
          <Route path="/dialogs" render={ () => <Dialogs data={props.data} />} />
          <Route path="/help" component={Help} />
        </div>
      </div>
  );
};

export default App;
