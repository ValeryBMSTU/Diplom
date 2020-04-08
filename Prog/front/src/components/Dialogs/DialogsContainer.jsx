import React from 'react';
import Dlg from './Dlg/Dlg'
import Msg from './Msg/Msg'
import {addMsgActionCreator, setNewMsgTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let changeMsg = (text) => {
    props.store.dispatch(setNewMsgTextActionCreator(text));
  };

  let addMsg = () => {
    props.store.dispatch(addMsgActionCreator());
  };

  let state = props.store.getState().dialogsPage;
  debugger;
  return (
    <Dialogs newMsgText={state.newMsgText} dialogsData={state.dialogsData} messagesData={state.messagesData}
    addMsg={addMsg} changeMsg={changeMsg}/>
  );
};

export default DialogsContainer