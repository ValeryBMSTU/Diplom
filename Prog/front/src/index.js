import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export let renderAll = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>, document.getElementById('root'));
};

renderAll(store);

store.subscribe(() => {
  renderAll(store);
});
// store.subscribe(renderAll);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
