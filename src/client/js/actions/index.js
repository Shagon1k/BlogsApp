const ADD_BLOG = 'ADD_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SEARCH_PARAM = 'SET_SEARCH_PARAM';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const addBlog = blog => {
	return {
		type: ADD_BLOG,
		blog
	}
}

export const deleteBlog = id => {
	return {
		type: DELETE_BLOG,
		id
	}
}
 
export const setSearchValue = value => {
	return {
		type: SET_SEARCH_VALUE,
		value
	}
}

export const setSearchParam = param => {
	return {
		type: SET_SEARCH_PARAM,
		param
	}
}

export const openModal = obj => {
	return {
		type: OPEN_MODAL,
		obj
	}
} 

export const closeModal = obj => {
	return {
		type: CLOSE_MODAL,
		obj
	}
}