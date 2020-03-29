import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
  debugger;
  return (
    <div className={s.messages}>
      Сообщения
      <div className={s.msg}>{props.msg1}</div>
      <div className={s.msg}>{props.msg2}</div>
      <div className={s.msg}>{props.msg3}</div>
    </div>
  );
};

export default Messages;