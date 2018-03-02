import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import appReducer from './reducers';
import App from './containers/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { install } from 'redux-loop';
import { saveState, loadState } from './utils/appstate.js';
import '../styles/main.scss';

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

const enhancer = composeEnhancers(
	install()
);

const store = createStore(appReducer, loadState(), enhancer);

store.subscribe(() => saveState(store.getState()));

render(
	<Provider store={store}>
		<Router path='/'>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);