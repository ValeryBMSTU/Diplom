import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
           alt="Чет пошло не так"/>
      {!props.authData.isAuth
        ? <div className={s.loginBlock}>
            <NavLink to={"/registration"}><button className={s.signUp}>Sign up</button></NavLink>
            {/*<NavLink to={"/login"}><button className={s.signIn}>Sign in</button></NavLink>*/}
            <button className={s.signIn} onClick={props.signIn}>Sign in</button>
          </div>
        : <div className={s.authorizedBlock}>
            {props.authData.login}
          </div>
      }
    </header>
  );
};

export default Header;