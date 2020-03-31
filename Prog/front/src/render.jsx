import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export let renderAll = (data, addSim) => {
  ReactDOM.render(
    <BrowserRouter>
      <App data={data} addSim={addSim}/>
    </BrowserRouter>, document.getElementById('root'));
};