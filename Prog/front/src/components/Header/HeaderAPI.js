import React from "react"
import Header from "./Header";
import {post} from "axios";

class HeaderAPI extends React.Component {
  componentDidMount() {
    // axios.post("http://localhost:8080/users/login").then(response => {
    //   debugger;
    //   this.props.setAuthData(response.data.body.auth_info.is_auth,
    //     response.data.body.auth_info.id,
    //     response.data.body.auth_info.login,
    //     response.data.body.auth_info.ava)
    // });
  }

  signIn = () => {
    post("http://localhost:8080/users/login", {withCredentials: true}).then(response => {
      debugger;
      let {is_auth, id, login, ava} = response.data.body.auth_info;
      this.props.setAuthData(is_auth, id, login, ava)
    });
  }

  render() {
    return <Header authData={this.props.authData} signIn={this.signIn}/>
  }
}

export default HeaderAPI;
