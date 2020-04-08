import React from 'react';
import MySimsContainer from "./MySims/MySimsConainer";
import Myinfo from "./MyInfo/MyInfo"

const Profile = (props) => {
  return (
    <div>
      <Myinfo />>
      <MySimsContainer store={props.store} />
    </div>
  );
};

export default Profile;