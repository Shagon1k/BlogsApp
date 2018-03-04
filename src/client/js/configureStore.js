import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import appReducer from './reducers';

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;



export default (initialState) => {
	const enhancer = composeEnhancers(
		install()
	);
	const store = createStore(appReducer, initialState, enhancer);

	return store;
}