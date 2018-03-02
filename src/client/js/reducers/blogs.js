import { loop, Cmd } from 'redux-loop';
import { blogsInitSuccessful, blogsInitFail, deleteBlog, addBlog, failedRequest } from '../actions';
import { fetchBlogsCall, requestAddBlogCall, requestDeleteBlogCall, normalizeBlogsData } from '../effects/blogs.js';
import { actionTypes } from '../config.js';

const blogs = (state = [], action) => {
	switch (action.type) {
		case actionTypes.FETCH_BLOGS:
			return loop(
				state,
				Cmd.run(fetchBlogsCall, {
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
				Cmd.run(requestAddBlogCall, {
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
				Cmd.run(requestDeleteBlogCall, {
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