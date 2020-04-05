export let store = {
  _dialogsPage: {
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
    ]
  },
  _profilePage: {
    simsData: [
      {id: 1, title: "My first sim", text: "Random text"},
      {id: 2, title: "Already", text: "love science"},
      {id: 3, title: "GoTo", text: "My name is bob"}
    ]
  },
  _newSimTitle: 'it-fignya',

  _renderAll() {
    console.log("state was changed");
  },
  subscribe(observer) {
    this._renderAll = observer;
  },
  _getDialogs() {
    return this._dialogsPage.dialogsData;
  },
  _getMessages() {
    return this._dialogsPage.messagesData;
  },
  _getSims() {
    return this._profilePage.simsData;
  },
  _getNewSimTitle() {
    return this._newSimTitle;
  },
  _addSim() {
    let newSim = {
      id: 4,
      title: this._newSimTitle,
      text: "i am a new sim",
    };
    this._profilePage.simsData.push(newSim);
    this._renderAll(this);
  },
  _setNewSimTitle(simTitle) {
    this._newSimTitle = simTitle;
    this._renderAll(this);
  },
  dispatch(action) {
    if (action.type === "SET-NEW-SIM-TITLE") {
      this._setNewSimTitle(action.title);
    } else if (action.type === "ADD-SIM") {
      this._addSim();
    } else if (action.type === "GET-NEW-SIM-TITLE") {
      return this._getNewSimTitle();
    } else if (action.type === "GET-SIMS") {
      return this._getSims();
    } else if (action.type === "GET-MESSAGES") {
      return this._getMessages();
    } else if (action.type === "GET-DIALOGS") {
      return this._getDialogs();
    }
  }

};

window.state = store;

export default store;