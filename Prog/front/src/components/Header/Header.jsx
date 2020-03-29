import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
           alt="Чет пошло не так"/>
      <button className={s.signUp}>Sign up</button>
      <button className={s.signIn}>Sign in</button>
    </header>
  );
};

export default Header;