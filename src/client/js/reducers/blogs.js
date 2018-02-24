const blogs = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [
				...state,
				{
					id: action.id,
					blog: action.blog
				}
			]
		case 'REMOVE_BLOG':
			return state.filter(elem => elem.id !== action.id)
		default:
			return state
	}
}

export default blogs