import React from "react";
import {Field, reduxForm} from "redux-form";

let RegForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
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
    console.log(formData)
  };


  render() {
    debugger;
    return (
      <div>
        <h1>Registration</h1>
        <RegReduxForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
};

export default Reg;