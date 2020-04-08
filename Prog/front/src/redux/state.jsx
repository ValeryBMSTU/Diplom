import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const GET_SIMS = "GET-SIMS";




export let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      simsData: [
        {id: 1, title: "My first sim", text: "Random text"},
        {id: 2, title: "Already", text: "love science"},
        {id: 3, title: "GoTo", text: "My name is bob"}
      ],
      newSimTitle: 'it-fignya',
    },
    sideBar: {},
  },

  _renderAll() {
    console.log("state was changed");
  },
  subscribe(observer) {
    this._renderAll = observer;
  },
  _getDialogs() {
    return this._state.dialogsPage.dialogsData;
  },
  _getMessages() {
    return this._state.dialogsPage.messagesData;
  },
  _getSims() {
    return this._state.profilePage.simsData;
  },
  _getNewSimTitle() {
    return this._state.profilePage.newSimTitle;
  },
  _getNewMsgText() {
    return this._state.dialogsPage.newMsgText;
  },
  _addSim() {
    let newSim = {
      id: 4,
      title: this._state.profilePage.newSimTitle,
      text: "i am a new sim",
    };
    this._state.profilePage.simsData.push(newSim);
    this._renderAll(this);
  },
  _addMsg() {
    let newMsg = {
      id: this._state.dialogsPage.curentMsgID + 1,
      msg: this._state.dialogsPage.newMsgText,
    };
    this._state.dialogsPage.curentMsgID = this._state.dialogsPage.curentMsgID + 1;
    this._state.dialogsPage.messagesData.push(newMsg);
    this._renderAll(this)
  },
  _setNewSimTitle(simTitle) {
    this._state.profilePage.newSimTitle = simTitle;
    this._renderAll(this);
  },
  _setNewMsgText(msgText) {
    this._state.dialogsPage.newMsgText = msgText;
    this._renderAll(this);
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    debugger;

    switch (action.type) {
      case "GET-NEW-SIM-TITLE": return this._getNewSimTitle();
      case "GET-SIMS":  return this._getSims();
      case "GET-MESSAGES":  return this._getMessages();
      case "GET-DIALOGS":  return this._getDialogs();
      case "GET-NEW-MSG-TEXT":  return this._getNewMsgText();
      default: this._renderAll(this)
    }
  }

};
;
export const getSimsActionCreator = () => ({type: GET_SIMS});

window.state = store;

export default store;