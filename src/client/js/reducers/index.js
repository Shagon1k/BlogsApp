import { combineReducers } from 'redux-loop';
import blogs from './blogs';
import search from './search';
import authentication from './authentication';

const appReducer = combineReducers({
	authentication,
	blogs,
	search
});

export default appReducer;