import React from 'react';
import s from './Dialogs.module.css';
import Dlg from './Dlg/Dlg'
import Msg from './Msg/Msg'

const Dialogs = (props) => {
  let newMsgElement = React.createRef();

  let onMsgChange = () => {
    let text = newMsgElement.current.value;
    props.changeMsg(text)
  };

  let onAddMsg = () => {
    props.addMsg();
  };

  let dialogsElements = props.dialogsData.map(item => <Dlg id={item.id} name={item.name} />);
  let messagesElements = props.messagesData.map(item => <Msg text={item.msg} />);

  return (
      <div className={s.content}>
        <div className={s.dialogs}>
          Диалоги
          {dialogsElements}
        </div>
        <div className={s.messages}>
          Сообщения
          {messagesElements}
          <textarea onChange={onMsgChange} ref={newMsgElement} value={props.newMsgText}/>
          <button onClick={onAddMsg} >Кнопочка</button>
        </div>
      </div>
  );
};

export default Dialogs