import { actionTypes } from '../config.js';

export const requestLogin = userform => {
	return {
		type: actionTypes.REQUEST_LOGIN,
		userform
	}
}

export const login = user => {
	return {
		type: actionTypes.LOGIN,
		user
	}
}

export const requestLogout = () => {
	return {
		type: actionTypes.REQUEST_LOGOUT
	}
}

export const logout = isSucceed => {
	return {
		type: actionTypes.LOGOUT,
		isSucceed
	}
}

export const requestRegister = regform => {
	return {
		type: actionTypes.REQUEST_REGISTER,
		regform
	}
}

export const register = isSucceed => {
	return {
		type: actionTypes.REGISTER,
		isSucceed
	}
}

export const initBlogs = () => {
	return {
		type: actionTypes.FETCH_BLOGS
	}
}

export const blogsInitSuccessful = resp => {
	return {
		type: actionTypes.FETCH_BLOGS_SUCCESSFUL,
		blogs: resp.blogs
	}
}

export const blogsInitFail = () => {
	throw new Error('Blogs initialization was failed');
	return {
		type: actionTypes.FETCH_BLOGS_FAILED
	}
}

export const requestAddBlog = blog => {
	return {
		type: actionTypes.REQUEST_ADD_BLOG,
		blog
	}
}

export const addBlog = elem => {
	return {
		type: actionTypes.ADD_BLOG,
		id: elem.id,
		blog: elem.blog
	}
}

export const requestDeleteBlog = id => {
	return {
		type: actionTypes.REQUEST_DELETE_BLOG,
		id
	}
}

export const deleteBlog = id => {
	return {
		type: actionTypes.DELETE_BLOG,
		id
	}
}

export const failedRequest = () => {
	throw new Error('Failed request');
	return {
		type: actionTypes.FAILED_REQUEST
	}
}

export const setSearchValue = value => {
	return {
		type: actionTypes.SET_SEARCH_VALUE,
		value
	}
}

export const setSearchParam = param => {
	return {
		type: actionTypes.SET_SEARCH_PARAM,
		param
	}
}