import React from 'react';
import {render, hydrate} from 'react-dom';
import App from './components/App.jsx';
import '../styles/main.scss';

hydrate(<App/>, document.getElementById("app"));