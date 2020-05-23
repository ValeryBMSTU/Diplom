import {connect} from "react-redux";
import UsersListAPI from "./UsersListAPI";
import {getUsers, sub} from "../../redux/usersReducer";
import {unsub} from "../../redux/usersReducer";
import {more} from "../../redux/usersReducer";
import {setUsers} from "../../redux/usersReducer";
import {toggleIsFetching} from "../../redux/usersReducer"
import withAuthRedirect from "../../hoc/hoc";

let mapStateToProps = (state) => {
  return {
    usersList: state.usersPage,
    isAuth: state.authData.isAuth
  };
};

const UsersListContainer = connect(mapStateToProps,
  { sub,
    unsub,
    more,
    setUsers,
    toggleIsFetching,
    getUsers
  }
  )(withAuthRedirect(UsersListAPI));

export default UsersListContainer;