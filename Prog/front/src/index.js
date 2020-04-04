import './index.css';
import * as serviceWorker from './serviceWorker';
import data, {subscribe} from './redux/state'
import {bll} from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export let renderAll = (data, bll) => {
  ReactDOM.render(
    <BrowserRouter>
      <App data={data} bll={bll}/>
    </BrowserRouter>, document.getElementById('root'));
};

renderAll(data, bll);

subscribe(renderAll);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
