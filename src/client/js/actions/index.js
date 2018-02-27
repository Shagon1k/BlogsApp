const INIT_BLOGS = 'INIT_BLOGS';
const BLOGS_INIT_SUCCESSFUL = 'BLOGS_INIT_SUCCESSFUL';
const BLOGS_INIT_FAILED = 'BLOGS_INIT_FAILED';
const ADD_BLOG = 'ADD_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SEARCH_PARAM = 'SET_SEARCH_PARAM';

export const initBlogs = () => {
	return {
		type: INIT_BLOGS
	}
}

export const blogsInitSuccessful = resp => {
	return {
		type: BLOGS_INIT_SUCCESSFUL,
		blogs: resp.blogs
	}
}

export const blogsInitFail = () => {
	throw new Error('Blogs initialization was failed');
	return {
		type: BLOGS_INIT_FAILED
	}
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

export const searchParameters = {
	BY_TITLE: 'BY_TITLE',
	BY_AUTHOR: 'BY_AUTHOR'
}

function genId() {
	return 'blog_' + Math.random().toString(36).substr(2);
}