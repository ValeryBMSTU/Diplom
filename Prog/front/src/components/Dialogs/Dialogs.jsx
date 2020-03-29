import React from 'react';
import s from './Dialogs.module.css';
import classes from "../Navbar/Navbar.module.css";
import {BrowserRouter, NavLink} from "react-router-dom";

const Dlg = (props) => {
  return (
    <div className={s.dlg}><NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink></div>
  )
};

const Msg = (props) => {
  return (
    <div className={s.msg}>{props.text}</div>
  )
};



const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: "Valery"},
    {id: 2, name: "Akakiy"},
    {id: 3, name: "Max"},
    {id: 4, name: "Nina"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Sveta"}
  ];

  let messagesData = [
    {id: 1, msg: "Hello"},
    {id: 2, msg: "How are you?"},
    {id: 3, msg: "London"},
    {id: 4, msg: "Go home"},
    {id: 5, msg: "COOL"},
    {id: 6, msg: "Nani!"}
  ];

  return (
    <BrowserRouter>
      <div className={s.content}>
        <div className={s.dialogs}>
          Диалоги
          <Dlg id={dialogsData[0].id} name={dialogsData[0].name} />
          <Dlg id={dialogsData[1].id} name={dialogsData[1].name} />
          <Dlg id={dialogsData[2].id} name={dialogsData[2].name} />
          <Dlg id={dialogsData[3].id} name={dialogsData[3].name} />
          <Dlg id={dialogsData[4].id} name={dialogsData[4].name} />
        </div>
        <div className={s.messages}>
          Сообщения
          <Msg text={messagesData[0].msg} />
          <Msg text={messagesData[1].msg} />
          <Msg text={messagesData[2].msg} />
          <Msg text={messagesData[3].msg} />
          <Msg text={messagesData[4].msg} />
          <Msg text={messagesData[5].msg} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dialogs