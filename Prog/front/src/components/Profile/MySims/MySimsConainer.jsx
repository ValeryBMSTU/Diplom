import MySims from "./MySims";
import {addSim, setNewSimTitle} from "../../../redux/profileReducer";
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
      dispatch(addSim());
    },
    changeSimTitle: (text) => {
      dispatch(setNewSimTitle(text));
    },
  };
};

const MySimsContainer = connect( mapStateToProps, mapDispatchToProps)(MySims);

export default MySimsContainer;