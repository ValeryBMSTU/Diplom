import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></div>
      <div className={classes.item}><NavLink to='/sims' activeClassName={classes.active}>Sims</NavLink></div>
      <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></div>
      <div className={classes.item}><NavLink to='/Help' activeClassName={classes.active}>Help</NavLink></div>
      <div className={classes.topUsers}>Top Users</div>
      <div className={classes.topLine}>
        <div className={classes.user}>
          <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
               alt="Чет пошло не так"/>
        </div>
        <div className={classes.user}>
          <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
               alt="Чет пошло не так"/>
        </div>
        <div className={classes.user}>
          <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
               alt="Чет пошло не так"/>
        </div>
      </div>
      <div className={classes.topLine}>
        <div className={classes.user}>
          <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
               alt="Чет пошло не так"/>
        </div>
        <div className={classes.user}>
          <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
               alt="Чет пошло не так"/>
        </div>
        <div className={classes.user}>
          <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
               alt="Чет пошло не так"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;