import React from "react";
import * as axios from "axios";
import UsersList from "./UsersList"
import Spinner from "../Common/Spinner"

class UsersListAPI extends React.Component  {

  componentDidMount() {
    this.props.getUsers(1);
  };

  changePage = (p) => {
    this.props.getUsers(p)
  };

  sub = (id) => {
    axios.post(`http://localhost:8080/users/${id}/subscribe`, null, {withCredentials: true}).then(() => {
      this.props.sub(id)
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.usersList.usersCount / this.props.usersList.currentCount);
    let uPages = [];

    for (let i = 1; i <= pagesCount; i = i + 1) {
      uPages.push(i)
    }

    return (
      <>
        { this.props.usersList.isFetching
          ? <Spinner />
          : <UsersList uPages={uPages} currentPage={this.props.usersList.currentPage} users={this.props.usersList.users}
                       unsub={this.props.unsub} sub={this.sub} changePage={this.changePage} />}

      </>
    )
  };
}

export default UsersListAPI;