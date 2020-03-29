import React from 'react';
import classes from './Profile.module.css'
import MySims from "./MySims/MySims";
import Myinfo from "./MyInfo/MyInfo"

const Profile = () => {
  return (
    <div className={classes.content}>
      <Myinfo />
      <MySims />
    </div>
  );
};

export default Profile;