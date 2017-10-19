import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {peopleInSpace, spaceLaunches} from './datasource.js'

//     --- (b) Passing props data inside a component
ReactDOM.render(<App astros={peopleInSpace} launches={spaceLaunches} />, document.getElementById('root'));
