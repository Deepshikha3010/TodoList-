import React from 'react';
import { render } from 'react-dom';
import{ BrowserRouter as Router  } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.css";
import 'jquery/dist/jquery';
import  'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';

import './hotstar.css';

import App from './App';
render(<Router> <App  /> </Router>, document.querySelector("#root"))

