import {AuthDAL} from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";
// const SIGN_IN = "SIGN-IN";
// const SIGN_UP = "SIGN-UP";

let initState = {
  editedData: {
    email: "",
    password: "",
    repeatedPassword: ""
  },
  isAuth: false,
  userID: null,
  login: null,
  ava: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_AUTH_DATA:
      state = {
        ...state,
        isAuth: action.isAuth,
        login: action.login,
        userID: action.userID,
        ava: action.ava
      };
      return state;
    default:
      return state
  }
};

// export const SignIn = (email, password) =>
//   ({type: SIGN_IN, email, password});
//
// export const SignUp = (email, password, repeatPassword) =>
//   ({type: SIGN_UP, email, password, repeatPassword});

export const setAuthData = (isAuth, userID, login, ava) =>
  ({type: SET_AUTH_DATA, isAuth, userID, login, ava});


// export const getUsers = (page) => {
//   return (dispatch) => {
//     dispatch(toggleIsFetching());
//     getUsersDAL(page).then(data => {
//       dispatch(toggleIsFetching());
//       dispatch(setUsers(data.body.users, data.body.users_count,
//         4, 1))
//     });
//   }
// };

export const SignIn = (email, password) => {
  return (dispatch) => {
    AuthDAL.SignIn(email, password).then(data => {
      let {is_auth, id, login, ava} = data;
      dispatch(setAuthData(is_auth, id, login, ava));
    })
  }
};

export const SignUp = (email, password) => {
  return (dispatch) => {
    AuthDAL.SignUp(email, password).then(data => {
      let {is_auth, id, login, ava} = data;
      dispatch(setAuthData(is_auth, id, login, ava));
    })
  }
};

export default authReducer;