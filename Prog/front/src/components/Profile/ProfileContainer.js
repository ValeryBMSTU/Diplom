import {connect} from "react-redux";
import ProfileAPI from "./ProfileAPI";
import {addSim, setNewSimTitle, setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};

const ProfileContainer = connect(mapStateToProps,
  {
    addSim,
    setNewSimTitle,
    setProfile,
  }
)(withRouter(ProfileAPI));

export default ProfileContainer;