import {connect} from "react-redux";
import {setAuthData} from "../../redux/authReducer"
import {withRouter} from "react-router-dom";
import HeaderAPI from "./HeaderAPI";

let mapStateToProps = (state) => {
  return {
    authData: state.authData
  }
};

const HeaderContainer = connect(mapStateToProps,
  {
   setAuthData
  })(withRouter(HeaderAPI));

export default HeaderContainer;