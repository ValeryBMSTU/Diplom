import {connect} from "react-redux";
import UsersList from "./UsersList";
import {subActionCreator} from "../../redux/usersReducer";
import {unsubActionCreator} from "../../redux/usersReducer";
import {moreActionCreator} from "../../redux/usersReducer";
import {setUsersActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    usersList: state.usersPage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sub: (userID) => {
      dispatch(subActionCreator(userID))
    },
    unsub: (userID) => {
      dispatch(unsubActionCreator(userID))
    },
    more: (userID) => {
      dispatch(moreActionCreator(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
  };
};

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;