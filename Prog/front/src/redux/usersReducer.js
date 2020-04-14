const SUB = "SUB";
const UNSUB = "UNSUB";
const MORE = "MORE";
const SET_USERS = "SET-USERS";

let initState = {
  users: [],
  usersCount: 0,
  currentCount: 0,
  currentPage: 1
  // users: [
  //   {id: 1, fullName: "Bozhe",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: true},
  //   {id: 2, fullName: "Kirik",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: false},
  //   {id: 3, fullName: "Danya",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: true},
  //   {id: 3, fullName: "Danya",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: true},
  //   {id: 4, fullName: "Bob Robinson",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: false},
  //   {id: 5, fullName: "Dima Lebedev",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: false},
  //   {id: 6, fullName: "Dun Shon",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: true},
  //   {id: 7, fullName: "Ali",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: false},
  //   {id: 8, fullName: "Nina",
  //     status: "nil", country: "Belarus",
  //     city: "Minsk", followed: true},
  // ]
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
      debugger;
      return {
        ...state,
        users: [...action.users],
        usersCount: action.usersCount,
        currentCount: action.currentCount,
        currentPage: action.currentPage
      };
    // case SET_PAGE:
    //   return {
    //     ...state,
    //     currentPage: action.currentPage
    //     currentCount: action.
    //
    //   }
    default:
      return state;
  }
};

export const subActionCreator = (userID) =>
  ({type: SUB, id: userID});
export const unsubActionCreator = (userID) =>
  ({type: UNSUB, id: userID});
export const moreActionCreator = (userID) =>
  ({type: MORE, id: userID});
export const setUsersActionCreator = (users, usersCount, currentCount, currentPage) =>
  ({type: SET_USERS, users: users, usersCount: usersCount,
    currentCount: currentCount, currentPage: currentPage});

export default usersReducer;