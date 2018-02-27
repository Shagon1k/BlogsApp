import { loop, Cmd } from 'redux-loop';
import { blogsInitSuccessful, blogsInitFail } from '../actions';
import { SERVER_URL } from '../config.js';

const blogs = (state = [], action) => {
	switch (action.type) {
		case 'INIT_BLOGS':
			return loop(
				state,
				Cmd.run(fetchBlogs, {
					successActionCreator: blogsInitSuccessful,
					failActionCreator: blogsInitFail
				})
			);
		case 'BLOGS_INIT_SUCCESSFUL':
			return normalizeBlogsData(action.blogs)
		case 'BLOGS_INIT_FAILED':
			return state
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

function fetchBlogs() {
	return fetch(`${SERVER_URL}/blogs`)
		.then(resp => {
    		return resp.json();
    	})
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