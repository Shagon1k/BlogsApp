import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { saveState, loadState } from './utils/appstate.js';
import configureStore from './configureStore.js'
import '../styles/main.scss';

const initialState = loadState();

//initial state ===? window.PRELOADER_STATE
//delete window.PRELOADED_STATE

const store = configureStore(initialState);

store.subscribe(() => saveState(store.getState()));

hydrate(
	<Provider store={store}>
		<BrowserRouter path='/'>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("app")
);