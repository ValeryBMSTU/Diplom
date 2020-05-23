import React from 'react';
import s from './Msg.module.css';

const Msg = (props) => {

  return (
    <div className={s.msg}>
      <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
           alt="Чет пошло не так"/>
      {props.text}
    </div>
  )
};

export default Msg;