import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { install } from 'redux-loop';
import '../styles/main.scss';

const store = createStore(appReducer, install());

render(
	<Provider store={store}>
		<Router path='/'>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);