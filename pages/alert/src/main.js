import { preface } from "./components/preface.js";
import { inputArea } from './components/input-area.js';

const root = document.getElementById('root');
//console.log(root);

root.appendChild(preface);
root.appendChild(inputArea);