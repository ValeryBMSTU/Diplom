import './index.css';
import * as serviceWorker from './serviceWorker';
import {renderAll} from "./render"
import data from './redux/state'
import {addSim} from './redux/state'

renderAll(data, addSim);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
