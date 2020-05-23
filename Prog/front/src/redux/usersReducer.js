import {UserDAL} from "../api/api";

const SUB = "SUB";
const UNSUB = "UNSUB";
const MORE = "MORE";
const SET_USERS = "SET-USERS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS_FETCHING"

let initState = {
  users: [],
  usersCount: 0,
  currentCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SUB:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return {...u, followed: true};
          }
          return u;
        }),
      };
    case UNSUB:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return {...u, followed: false};
          }
          return u;
        }),
      };
    case MORE: return;
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
        usersCount: action.usersCount,
        currentCount: action.currentCount,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    default:
      return state;
  }
};

export const sub = (userID) =>
  ({type: SUB, id: userID});
export const unsub = (userID) =>
  ({type: UNSUB, id: userID});
export const more = (userID) =>
  ({type: MORE, id: userID});
export const setUsers = (users, usersCount, currentCount, currentPage) =>
  ({type: SET_USERS, users: users, usersCount: usersCount,
    currentCount: currentCount, currentPage: currentPage});
export const toggleIsFetching = () =>
  ({type: TOGGLE_IS_FETCHING});

export const getUsers = (page) => {
  return (dispatch) => {
    dispatch(toggleIsFetching());
    UserDAL.getUsers(page).then(data => {
      dispatch(toggleIsFetching());
      dispatch(setUsers(data.body.users, data.body.users_count,
        4, 1))
    });
  }
};

export default usersReducer;