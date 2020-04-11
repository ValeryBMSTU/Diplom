const ADD_SIM = "ADD-SIM";
const SET_NEW_SIM_TITLE = "SET-NEW-SIM-TITLE";

let initState = {
  simsData: [
    {id: 1, title: "My first sim", text: "Random text"},
    {id: 2, title: "Already", text: "love science"},
    {id: 3, title: "GoTo", text: "My name is bob"},
  ],
  newSimTitle: 'it-fignya',
};

export const profileReducer = (state = initState, action) => {
  if (action.type === SET_NEW_SIM_TITLE) {
    let stateCopy = {...state};
    stateCopy.newSimTitle = action.title;
    return stateCopy;
  } else if (action.type === ADD_SIM) {
    let newSim = {
      id: 4,
      title: state.newSimTitle,
      text: "i am a new sim",
    };
    let stateCopy = {...state};
    stateCopy.simsData = [...state.simsData];
    stateCopy.simsData.push(newSim);
    stateCopy.newSimTitle = "";
    return stateCopy
  }

  return state
};

export const addSimActionCreator = () => ({type: ADD_SIM});
export const setNewSimTitleActionCreator = (text) =>
  ({type: SET_NEW_SIM_TITLE, title: text});

export default profileReducer;