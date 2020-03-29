import React from 'react';
import s from './MyInfo.module.css'

const MyInfo = () => {
  return (
      <div className='myProfile'>
        <div className={s.imgProfile}>
          <img src='https://cont.ws/uploads/pic/2018/9/microscopic7.jpg' alt="Чет пошло не так"/>
        </div>
        <div>
          ava + description
        </div>
      </div>
  );
};

export default MyInfo;