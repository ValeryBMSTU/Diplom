const SET_NEW_MSG_TEXT = "SET-NEW-MSG-TEXT";
const ADD_MSG = "ADD-MSG";

let initState = {
  dialogsData: [
    {id: 1, name: "Valery"},
    {id: 2, name: "Akakiy"},
    {id: 3, name: "Max"},
    {id: 4, name: "Nina"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Sveta"}
  ],
  messagesData: [
    {id: 1, msg: "Hello"},
    {id: 2, msg: "How are you?"},
    {id: 3, msg: "London"},
    {id: 4, msg: "Go home"},
    {id: 5, msg: "COOL"},
    {id: 6, msg: "Nani!"}
  ],
  newMsgText: "",
  curentMsgID: 6,
};

export const dialogsReducer = (state = initState, action) => {
  if (action.type === SET_NEW_MSG_TEXT) {
    let stateCopy = {...state};
    stateCopy.newMsgText = action.text;
    return stateCopy;
  } else if (action.type === ADD_MSG) {
    let newMsg = {
      id: state.curentMsgID + 1,
      msg: state.newMsgText,
    };
    let stateCopy = {...state};
    stateCopy.messagesData = [...state.messagesData];
    stateCopy.dialogsData = [...state.dialogsData];
    stateCopy.curentMsgID = state.curentMsgID + 1;
    stateCopy.messagesData.push(newMsg);
    stateCopy.newMsgText = "";
    return stateCopy;
  }

  return state
};

export const setNewMsgTextActionCreator = (text) =>
  ({type: SET_NEW_MSG_TEXT, text: text});
export const addMsgActionCreator = () => ({type: ADD_MSG});

export default dialogsReducer;