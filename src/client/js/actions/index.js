const ADD_BLOG = 'ADD_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SEARCH_PARAM = 'SET_SEARCH_PARAM';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

function genId() {
	return 'blog_' + Math.random().toString(36).substr(2);
}

export const addBlog = blog => {
	return {
		type: ADD_BLOG,
		id: genId(),
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

export const openModal = modalObject => {
	return {
		type: OPEN_MODAL,
		modalObject
	}
} 

export const closeModal = modalObject => {
	return {
		type: CLOSE_MODAL,
		modalObject
	}
}

export const searchParameters = {
	BY_TITLE: 'BY_TITLE',
	BY_AUTHOR: 'BY_AUTHOR'
}