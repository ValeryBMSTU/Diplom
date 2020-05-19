import React from "react";

let Login = (props) => {

  let EmailInput = React.createRef();
  let PasswordInput = React.createRef();

  let SignIn = () => {
    props.SignIn(EmailInput.current.value, PasswordInput.current.value)
  };

  return (
    <>
      <div>
        <p>Вы не авторизованы</p>
      </div>
      <div>
        Email: <input ref={EmailInput}></input>
      </div>
      <div>
        Password: <input ref={PasswordInput}></input>
      </div>
      <div>
        <button onClick={SignIn}>Sign In</button>
      </div>
    </>
  )
};

export default Login;