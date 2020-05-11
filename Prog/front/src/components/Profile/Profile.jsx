import React from 'react';
import MySims from "./MySims/MySims";
import MyInfo from "./MyInfo/MyInfo"

const Profile = (props) => {
  return (
    <div>
      <MyInfo profile={props.profilePage.profile} setProfile={props.setProfile}/>
      <MySims profile={props.profilePage.profile} newSimTitle={props.profilePage.newSimTitle}
                       addSim={props.addSim} setNewSimTitle={props.setNewSimTitle}/>
    </div>
  );
};

export default Profile;