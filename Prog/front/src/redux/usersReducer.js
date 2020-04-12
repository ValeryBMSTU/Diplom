const SUB = "SUB";
const UNSUB = "UNSUB";
const MORE = "MORE";
const SET_USERS = "SET-USERS";

let initState = {
  users: []
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
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
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
export const setUsersActionCreator = (users) =>
  ({type: SET_USERS, users: users});

export default usersReducer;