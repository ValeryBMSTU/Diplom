import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {compose} from "redux";
import {SignIn, SignUp} from "../../redux/authReducer";

class LoginAPI extends React.Component {
  componentDidMount() {

  }

  render() {
    return <Login SignIn={this.props.SignIn}
                  SignUp={this.props.SignUp}
                  authData={this.props.authData} />;
  }
}

let mapStateToProps = (state) => {
  return {
    authData: state.authData
  };
};

let LoginContainer = compose(
  connect(mapStateToProps, {SignIn, SignUp})
)(LoginAPI);

export default LoginContainer;