import { actionTypes } from '../config.js';

const search = (state = {searchValue: '', searchParam: 'BY_TITLE'}, action) => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.value
			}
		case actionTypes.SET_SEARCH_PARAM:
			return {
				...state,
				searchParam: action.param
			}
		default:
			return state
	}
}

export default search;