import { loop, Cmd } from 'redux-loop';
import { blogsInitSuccessful, blogsInitFail, deleteBlog, addBlog, failedRequest } from '../actions';
import { SERVER_URL, actionTypes } from '../config.js';

const blogs = (state = [], action) => {
	switch (action.type) {
		case actionTypes.FETCH_BLOGS:
			return loop(
				state,
				Cmd.run(fetchBlogs, {
					successActionCreator: blogsInitSuccessful,
					failActionCreator: blogsInitFail
				})
			);
		case actionTypes.FETCH_BLOGS_SUCCESSFUL:
			return normalizeBlogsData(action.blogs)
		case actionTypes.FETCH_BLOGS_FAILED:
			return state
		case actionTypes.REQUEST_ADD_BLOG:
			return loop(
				state,
				Cmd.run(requestAddBlog, {
					successActionCreator: addBlog,
					failActionCreator: failedRequest,
					args: [action.blog]
				}))
		case actionTypes.ADD_BLOG:
			return [
				{
					id: action.id,
					blog: action.blog
				},
				...state
			]
		case actionTypes.REQUEST_DELETE_BLOG:
			return loop(
				state,
				Cmd.run(requestDeleteBlog, {
					successActionCreator: deleteBlog,
					failActionCreator: failedRequest,
					args: [action.id]
				}))
		case actionTypes.DELETE_BLOG:
			return state.filter(elem => elem.id !== action.id)
		case actionTypes.FAILED_REQUEST: 
			return state
		default:
			return state
	}
}

function fetchBlogs() {
	return fetch(`${SERVER_URL}/blogs`, {
			credentials: 'include'
		})
		.then(resp => resp.json())
}

function requestAddBlog(blog) {
	return fetch(`${SERVER_URL}/blogs/`, {
			method: 'put',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: blog.title,
				author: blog.author,
				message: blog.message
			})
		})
		.then(resp => resp.json())
		.then((resp) => {
			return {
				id: resp.blog._id,
				blog: {
					title: resp.blog.title,
					author: resp.blog.author,
					message: resp.blog.message,
					date: resp.blog.date
				}
			}
		})
}

function requestDeleteBlog(blogId) {
	return fetch(`${SERVER_URL}/blogs/${blogId}`, {
		credentials: 'include',
		method: 'delete'
	}).then(() => blogId)
}

function normalizeBlogsData(blogsData) {
	let normBlogsData = [];
	blogsData.forEach((i) => {
		normBlogsData.push({
			id: i._id,
			blog: {
				title: i.title,
				author: i.author,
				message: i.message,
				date: i.date
			}
		})
	})

	return normBlogsData.sort((blog1, blog2) => {
		return new Date(blog2.blog.date) - new Date(blog1.blog.date);
	});
}

export default blogs;