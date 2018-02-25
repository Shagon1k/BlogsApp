const blogs = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [
				{
					id: action.id,
					blog: action.blog
				},
				...state
				
			]
		case 'DELETE_BLOG':
			return state.filter(elem => elem.id !== action.id)
		default:
			return state
	}
}

export default blogs