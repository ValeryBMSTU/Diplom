let renderAll = () => {
  console.log("state was changed")
};

let data = {
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
  simsData: [
    {id: 1, title: "My first sim", text: "Random text"},
    {id: 2, title: "Already", text: "love science"},
    {id: 3, title: "GoTo", text: "My name is bob"}
  ],
  newSimTitle: 'it-fignya'
};

window.state = data;

const addSim = () => {
  let newSim = {
    id: 4,
    title: data.newSimTitle,
    text: "i am a new sim",
  };
  data.simsData.push(newSim);
  renderAll(data, bll);
};

const setNewSimTitle = (simTitle) => {
  data.newSimTitle = simTitle
  renderAll(data, bll);
};

export const bll = {
  AddSim: addSim,
  SetNewSimTitle: setNewSimTitle
};

export const subscribe = (observer) => {
  renderAll = observer;
};

export default data;