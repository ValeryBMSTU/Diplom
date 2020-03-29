import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></div>
      <div className={classes.item}><NavLink to='/sims' activeClassName={classes.active}>Sims</NavLink></div>
      <div className={classes.item}><NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink></div>
      <div className={classes.item}><NavLink to='/Help' activeClassName={classes.active}>Help</NavLink></div>
    </nav>
  );
};

export default Navbar;