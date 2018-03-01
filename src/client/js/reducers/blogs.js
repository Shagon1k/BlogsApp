import { loop, Cmd } from 'redux-loop';
import { blogsInitSuccessful, blogsInitFail, deleteBlog, addBlog, failedRequest } from '../actions';
import { fetchBlogs, requestAddBlog, requestDeleteBlog, normalizeBlogsData } from '../effects/blogs.js';
import { actionTypes } from '../config.js';

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

export default blogs;