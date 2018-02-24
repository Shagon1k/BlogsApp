const modals = (state = [], action) => {
	switch (action.type) {
		case 'OPEN_MODAL':
			return [
				...state,
				modalObject
			]
		case 'CLOSE_MODAL':
			return state.filter(elem => elem.id !== action.modalObject.id)
		default:
			return state
	}
}

export default modals;