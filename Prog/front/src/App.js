import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Settings from "./components/Settings/Settings";
import SimsList from "./components/SimsList/SimsList";
import Help from "./components/Help/Help";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersListContainer from "./components/UsersList/UsersLIstContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainers";
import Reg from "./components/Reg/Reg";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer store={props.store}/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/bib' render={ () => <Reg store={props.store} />} />
          <Route path="/login" render={ () => <LoginContainer store={props.store} />} />
          <Route path="/profile/:id?" render={ () => <ProfileContainer store={props.store} />} />
          <Route path="/settings" component={Settings} />
          <Route path="/sims" component={SimsList} />
          <Route path='/users' component={ () => <UsersListContainer store={props.store} />} />
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} />} />
          <Route path="/help" component={Help} />
        </div>
      </div>
  );
};

export default App;
