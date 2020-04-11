import MySims from "./MySims";
import {addSimActionCreator, setNewSimTitleActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    simsData: state.profilePage.simsData,
    newSimTitle: state.profilePage.newSimTitle,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addSim: () => {
      dispatch(addSimActionCreator());
    },
    changeSimTitle: (text) => {
      dispatch(setNewSimTitleActionCreator(text));
    },
  };
};

const MySimsContainer = connect( mapStateToProps, mapDispatchToProps)(MySims)

export default MySimsContainer;