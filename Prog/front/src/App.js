import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SimsList from "./components/SimsList/SimsList";
import Help from "./components/Help/Help";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path="/profile" render={ () => <Profile store={props.store} />} />
          <Route path="/settings" component={Settings} />
          <Route path="/sims" component={SimsList} />
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} />} />
          <Route path="/help" component={Help} />
        </div>
      </div>
  );
};

export default App;
