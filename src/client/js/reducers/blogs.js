import { loop, Cmd } from 'redux-loop';
import { blogsInitSuccessful, blogsInitFail, deleteBlog, failedRequest } from '../actions';
import { SERVER_URL } from '../config.js';

const blogs = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_BLOGS':
			return loop(
				state,
				Cmd.run(fetchBlogs, {
					successActionCreator: blogsInitSuccessful,
					failActionCreator: blogsInitFail
				})
			);
		case 'FETCH_BLOGS_SUCCESSFUL':
			return normalizeBlogsData(action.blogs)
		case 'FETCH_BLOGS_FAILED':
			return state
		case 'ADD_BLOG':
			return [
				{
					id: action.id,
					blog: action.blog
				},
				...state
				
			]
		case 'SEND_REQUEST_DELETE_BLOG':
			return loop(
				state,
				Cmd.run(deleteBlogCall, {
					successActionCreator: deleteBlog,
					failActionCreator: failedRequest,
					args: [action.id]
				}))
		case 'DELETE_BLOG':
			return state.filter(elem => elem.id !== action.id)
		case 'FAILED_REQUEST': 
			return state
		default:
			return state
	}
}

function fetchBlogs() {
	return fetch(`${SERVER_URL}/blogs`)
		.then(resp => {
			return resp.json();
		})
}

function deleteBlogCall(blogId) {
	return fetch(`${SERVER_URL}/blogs/${blogId}`, {
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
				message: i.message
			}
		})
	})

	return normBlogsData;
}

export default blogs