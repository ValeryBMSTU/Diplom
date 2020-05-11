const SET_AUTH_DATA = "SET_AUTH_DATA";

let initState = {
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

export const setAuthData = (isAuth, userID, login, ava) =>
  ({type: SET_AUTH_DATA, isAuth, userID, login, ava});

export default authReducer;