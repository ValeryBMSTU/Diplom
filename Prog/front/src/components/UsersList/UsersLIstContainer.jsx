import {connect} from "react-redux";
import UsersListAPI from "./UsersListAPI";
import {sub} from "../../redux/usersReducer";
import {unsub} from "../../redux/usersReducer";
import {more} from "../../redux/usersReducer";
import {setUsers} from "../../redux/usersReducer";
import {toggleIsFetching} from "../../redux/usersReducer"

let mapStateToProps = (state) => {
  return {
    usersList: state.usersPage
  };
};

const UsersListContainer = connect(mapStateToProps,
  { sub,
    unsub,
    more,
    setUsers,
    toggleIsFetching
  }
  )(UsersListAPI);

export default UsersListContainer;