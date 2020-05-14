import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      debugger;
      if (!this.props.isAuth) {
        return <Redirect to="login"/>
      } else {
        return <Component {...this.props}/>
      }
    }
  }

  let mapStateToPropsForAuth = (state) => {
    return {
      isAuth: state.authData.isAuth
    }
  };

  return connect(mapStateToPropsForAuth)(RedirectComponent);
};

export default withAuthRedirect;