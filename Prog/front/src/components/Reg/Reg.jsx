import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators"
import {Input} from "../Common/FormsControls"
import {compose} from "redux";
import {connect} from "react-redux";
import {SignUp} from "../../redux/authReducer";

let maxLengthValidator = maxLength(30)

let RegForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Nickname"}
               name={"nickname"}
               component={Input}
               validate={[requiredField, maxLengthValidator]}/>
      </div>
      <div>
        <Field placeholder={"Email"}
               name={"email"}
               component={Input}
               validate={[requiredField, maxLengthValidator]}/>
      </div>
      <div>
        <Field placeholder={"Password"}
               name={"password"}
               component={"input"} />
      </div>
      <div>
        <button>Нажми меня</button>
      </div>
    </form>
  )
};

let RegReduxForm = reduxForm({form: 'reg'})(RegForm);

class Reg extends React.Component {
  onSubmit = (formData) => {
    this.props.SignUp(formData.nickname, formData.email, formData.password)
  };


  render() {
    return (
      <div>
        <h1>Registration</h1>
        <RegReduxForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {};
};

let RegContainer = compose(
  connect(mapStateToProps, {SignUp})
)(Reg);

export default RegContainer;