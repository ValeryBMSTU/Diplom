import React from 'react';
import MySims from "./MySims";
import {addSimActionCreator, setNewSimTitleActionCreator} from "../../../redux/profileReducer";

const MySimsContainer = (props) => {

  let addSim = () => {
    props.store.dispatch(addSimActionCreator());
  };

  let changeSimTitle = (text) => {
    props.store.dispatch(setNewSimTitleActionCreator(text));
  };

  let state = props.store.getState().profilePage;

  return (
    <div>
      <MySims simsData={state.simsData} newSimTitle={props.newSimTitle} addSim={addSim} changeSimTitle={changeSimTitle} />
    </div>
  );
};

export default MySimsContainer;