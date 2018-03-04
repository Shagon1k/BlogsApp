import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { saveState, loadState } from './utils/appstate.js';
import configureStore from './configureStore.js'
import '../styles/main.scss';

let store;
const savedLocalState = loadState();

//If we need to get preloaded state from server, we can use id passed through window.__PRELOADED_STATE__
if (savedLocalState) {
	store = configureStore(savedLocalState);
} else {
	store = configureStore(window.PRELOADED_STATE)
}

delete window.PRELOADED_STATE

store.subscribe(() => saveState(store.getState()));

hydrate(
	<Provider store={store}>
		<BrowserRouter path='/'>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("app")
);