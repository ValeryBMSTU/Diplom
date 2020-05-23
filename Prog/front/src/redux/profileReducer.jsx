const ADD_SIM = "ADD-SIM";
const SET_NEW_SIM_TITLE = "SET-NEW-SIM-TITLE";
const SET_PROFILE = "SET_PROFILE";

let initState = {
  simsData: [
    {id: 1, title: "My first sim", text: "Random text"},
    {id: 2, title: "Already", text: "love science"},
    {id: 3, title: "GoTo", text: "My name is bob"},
  ],
  newSimTitle: 'it-fignya',
  profile: null
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
    stateCopy.profile = state.profile;
    stateCopy.profile.sims = [...state.profile.sims];
    stateCopy.profile.sims.push(newSim);
    stateCopy.newSimTitle = "";

    return stateCopy
  } else if (action.type === SET_PROFILE) {
    state.profile = action.profile;
    return state
  }

  return state
};

export const addSim = () => ({type: ADD_SIM});
export const setNewSimTitle = (text) =>
  ({type: SET_NEW_SIM_TITLE, title: text});
export const setProfile = (profile) =>
  ({type: SET_PROFILE, profile});

export default profileReducer;