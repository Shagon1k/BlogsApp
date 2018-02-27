const FETCH_BLOGS = 'FETCH_BLOGS';
const FETCH_BLOGS_SUCCESSFUL = 'FETCH_BLOGS_SUCCESSFUL';
const FETCH_BLOGS_FAILED = 'FETCH_BLOGS_FAILED';
const ADD_BLOG = 'ADD_BLOG';
const SEND_REQUEST_DELETE_BLOG = 'SEND_REQUEST_DELETE_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';
const FAILED_REQUEST = 'FAILED_REQUEST';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SEARCH_PARAM = 'SET_SEARCH_PARAM';

export const initBlogs = () => {
	return {
		type: FETCH_BLOGS
	}
}

export const blogsInitSuccessful = resp => {
	return {
		type: FETCH_BLOGS_SUCCESSFUL,
		blogs: resp.blogs
	}
}

export const blogsInitFail = () => {
	throw new Error('Blogs initialization was failed');
	return {
		type: FETCH_BLOGS_FAILED
	}
}

export const addBlog = blog => {
	return {
		type: ADD_BLOG,
		id: genId(),
		blog
	}
}

export const sendRequestDeleteBlog = id => {
	return {
		type: SEND_REQUEST_DELETE_BLOG,
		id
	}
}

export const deleteBlog = id => {
	return {
		type: DELETE_BLOG,
		id
	}
}

export const failedRequest = () => {
	throw new Error('Failed request');
	return {
		type: FAILED_REQUEST
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

export const searchParameters = {
	BY_TITLE: 'BY_TITLE',
	BY_AUTHOR: 'BY_AUTHOR'
}

function genId() {
	return 'blog_' + Math.random().toString(36).substr(2);
}