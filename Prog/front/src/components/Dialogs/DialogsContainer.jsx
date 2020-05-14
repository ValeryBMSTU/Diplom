import {addMsgActionCreator, setNewMsgTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/hoc";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    isAuth: state.authData.isAuth
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMsg: () => {
      dispatch(addMsgActionCreator())
    },
    changeMsg: (text) => {
      dispatch(setNewMsgTextActionCreator(text))
    },
  };
};

const DialogsContainer = connect(mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));

export default DialogsContainer;