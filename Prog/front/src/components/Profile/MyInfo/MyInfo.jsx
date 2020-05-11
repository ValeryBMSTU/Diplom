import React from 'react';
import s from './MyInfo.module.css'

const MyInfo = (props) => {
  return (
      <div className='myProfile'>
        <div className={s.imgProfile}>
          <img src='https://cont.ws/uploads/pic/2018/9/microscopic7.jpg' alt="Чет пошло не так"/>
        </div>
        <div>
          {props.profile !== null
            ? <div>
                <p>{props.profile.full_name}</p>
                {props.profile.status}
                {props.profile.email}
              </div>
            : null
          }
        </div>
      </div>
  );
};

export default MyInfo;