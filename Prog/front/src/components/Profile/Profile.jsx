import React from 'react';
import MySims from "./MySims/MySims";
import Myinfo from "./MyInfo/MyInfo"

const Profile = (props) => {
  let newSimElement = React.createRef();

  let AddSim = () => {
    props.bll.AddSim();
    props.bll.SetNewSimTitle('')
  };

  let onSimChange = () => {
    let text = newSimElement.current.value;
    console.log(text);
    props.bll.SetNewSimTitle(text);
  };

  return (
    <div>
      <Myinfo />
      <textarea onChange={onSimChange} ref={newSimElement} value={props.data.newSimTitle}/>
      <button onClick={AddSim}>Создать симуляцию</button>
      <MySims data={props.data} />
    </div>
  );
};

export default Profile;