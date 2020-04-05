import React from 'react';
import MySims from "./MySims/MySims";
import Myinfo from "./MyInfo/MyInfo"

const Profile = (props) => {
  let addSimActionCreator = () => {
    return {
      type: "ADD-SIM"
    };
  };

  let newSimElement = React.createRef();

  let AddSim = () => {

    props.store.dispatch(addSimActionCreator());
    props.store.dispatch({type: "SET-NEW-SIM-TITLE", title: ""});
  };

  let onSimChange = () => {
    let text = newSimElement.current.value;
    console.log(text);
    props.store.dispatch({type: "SET-NEW-SIM-TITLE", title: text});
  };

  return (
    <div>
      <Myinfo />
      <textarea onChange={onSimChange} ref={newSimElement} value={props.store.dispatch({type: "GET-NEW-SIM-TITLE"})}/>
      <button onClick={AddSim}>Создать симуляцию</button>
      <MySims data={props.store.dispatch({type: "GET-SIMS"})} />
    </div>
  );
};

export default Profile;