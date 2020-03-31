import React from 'react';
import MySims from "./MySims/MySims";
import Myinfo from "./MyInfo/MyInfo"

const Profile = (props) => {
  let newSimElement = React.createRef();

  let AddSim = () => {
    let text = newSimElement.current.value;
    props.addSim(text);
    newSimElement.current.value = '';
  };

  return (
    <div>
      <Myinfo />
      <textarea ref={newSimElement} value="it-fignya"/><button onClick={AddSim}>Создать симуляцию</button>
      <MySims data={props.data} />
    </div>
  );
};

export default Profile;