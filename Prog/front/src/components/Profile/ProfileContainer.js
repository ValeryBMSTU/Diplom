import {connect} from "react-redux";
import ProfileAPI from "./ProfileAPI";
import {addSim, setNewSimTitle, setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/hoc";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};

const ProfileContainer = compose(
  connect(mapStateToProps, {addSim, setNewSimTitle, setProfile}),
  withRouter,
  withAuthRedirect
)(ProfileAPI);

// const ProfileContainer = connect(mapStateToProps,
//   {
//     addSim,
//     setNewSimTitle,
//     setProfile,
//   }
// )(withRouter(withAuthRedirect(ProfileAPI)));

export default ProfileContainer;