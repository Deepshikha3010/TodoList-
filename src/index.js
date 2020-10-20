import React from 'react';
import {render} from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import "jquery/dist/jquery"
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import "./index.css";

import App from './App';
render(<App/> ,document.querySelector("#root"));