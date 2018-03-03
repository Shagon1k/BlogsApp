import test from 'tape';
import { loop, Cmd } from 'redux-loop';
import { initBlogs, blogsInitSuccessful, blogsInitFail, requestdeleteBlog, 
	deleteBlog, requestAddBlog, addBlog, requestDeleteBlog, failedRequest } from '../../actions';
import { fetchBlogsCall, requestAddBlogCall, requestDeleteBlogCall, normalizeBlogsData } from '../../effects/blogs.js';
import blogs from '../blogs.js';
import { actionTypes } from '../../config.js';

describe('blogs reducer', () => {
	const initialState = [],
		dummyBlog = {
			author: 'author',
			title: 'title',
			message: 'message',
			date: '2018-03-01T13:37:08.068Z'
		},
		dummyBlogsArray = [{}, {}],
		dummyState = [
			{
				id: 123,
				blog: {
					author: 'author',
					title: 'title',
					message: 'message',
					date: '2018-03-01T13:37:08.068Z'
				}
			},
			{
				id: 1234,
				blog: {
					author: 'author2',
					title: 'title2',
					message: 'message2',
					date: '2018-03-01T13:38:08.068Z'
				}
			},
		];

	it('should handle initial state', () => {
		expect(blogs(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_BLOGS action', () => {
		const result = blogs(initialState, initBlogs());

		expect(loop(
				initialState,
				Cmd.run(fetchBlogsCall, {
					successActionCreator: blogsInitSuccessful,
					failActionCreator: blogsInitFail
				})
			))
			.toEqual(result);
	});

	it('should handle FETCH_BLOGS_SUCCESSFUL action', () => {
		expect(blogs(initialState, {
			type: actionTypes.FETCH_BLOGS_SUCCESSFUL,
			blogs: dummyBlogsArray
		})).toEqual(normalizeBlogsData(dummyBlogsArray))
	});

	it('should handle REQUEST_ADD_BLOG action', () => {
		const result = blogs(initialState, requestAddBlog(dummyBlog));

		expect(loop(
				initialState,
				Cmd.run(requestAddBlogCall, {
					successActionCreator: addBlog,
					failActionCreator: failedRequest,
					args: [dummyBlog]
				})
			))
			.toEqual(result);
	});

	it('should handle ADD_BLOG', () => {
		expect(blogs(initialState, {
			type: actionTypes.ADD_BLOG,
			blog: dummyBlog,
			id: 123
		})).toEqual([{id: 123, blog: dummyBlog}])
	});

	it('should handle REQUEST_DELETE_BLOG action', () => {
		const result = blogs(dummyState, requestDeleteBlog(123));

		expect(loop(
				dummyState,
				Cmd.run(requestDeleteBlogCall, {
					successActionCreator: deleteBlog,
					failActionCreator: failedRequest,
					args: [123]
				})
			))
			.toEqual(result);
	});

	it('should handle DELETE_BLOG', () => {
		expect(blogs([{id: 123, blog: dummyBlog}], {
			type: actionTypes.DELETE_BLOG,
			id: 123
		})).toEqual([])
	});
});