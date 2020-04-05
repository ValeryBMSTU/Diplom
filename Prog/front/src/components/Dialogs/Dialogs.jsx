import React from 'react';
import s from './Dialogs.module.css';
import Dlg from './Dlg/Dlg'
import Msg from './Msg/Msg'

const Dialogs = (props) => {

  let dialogsElements = props.store.dispatch({type: "GET-DIALOGS"}).map(item => <Dlg id={item.id} name={item.name} />);
  let messagesElements = props.store.dispatch({type: "GET-MESSAGES"}).map(item => <Msg text={item.msg} />);

  return (
      <div className={s.content}>
        <div className={s.dialogs}>
          Диалоги
          {dialogsElements}
        </div>
        <div className={s.messages}>
          Сообщения
          {messagesElements}
        </div>
      </div>
  );
};

export default Dialogs