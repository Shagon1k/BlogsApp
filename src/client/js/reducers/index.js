import { combineReducers } from 'redux-loop';
import blogs from './blogs';
import search from './search';

const appReducer = combineReducers({
	blogs,
	search
});

export default appReducer;