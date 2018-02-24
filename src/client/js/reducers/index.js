import { combineReducers } from 'redux';
import blogs from './blogs';
import search from './search';
import modals from './modals';

const blogsApp = combineReducers({
	blogs,
	search,
	modals
});

export default blogsApp;