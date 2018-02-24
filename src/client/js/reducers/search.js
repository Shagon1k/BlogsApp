const search = (state = {searchValue: '', searchParam: 'BY_TITLE'}, action) => {
	switch (action.type) {
		case 'SET_SEARCH_VALUE':
			return {
				...state,
				searchValue: action.value
			}
		case 'SET_SEARCH_PARAM':
			return {
				...state,
				searchParam: action.param
			}
		default:
			return state
	}
}

export default search;