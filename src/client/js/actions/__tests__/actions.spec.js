import * as actions from '../index.js';
import { actionTypes } from '../../config.js';

describe('blogsApp actions', () => {
	const dummyForm = {},
		dummyBlogsResp = {
			blogs: []
		},
		dummyBlogElem = {
			id: '1',
			blog: {}
		};

	it('requestLogin should create REQUEST_LOGIN action', () => {
		expect(actions.requestLogin(dummyForm)).toEqual({
			type: actionTypes.REQUEST_LOGIN,
			userform: dummyForm
		})
	});

	it('login should create LOGIN action', () => {
		expect(actions.login(dummyForm)).toEqual({
			type: actionTypes.LOGIN,
			user: dummyForm
		})
	});

	it('requestLogout should create REQUEST_LOGOUT action', () => {
		expect(actions.requestLogout()).toEqual({
			type: actionTypes.REQUEST_LOGOUT
		})
	});

	it('logout should create LOGOUT action', () => {
		expect(actions.logout(true)).toEqual({
			type: actionTypes.LOGOUT,
			isSucceed: true
		})
	});

	it('requestRegister should create REQUEST_REGISTER action', () => {
		expect(actions.requestRegister(dummyForm)).toEqual({
			type: actionTypes.REQUEST_REGISTER,
			regform: dummyForm
		})
	});

	it('register should create REGISTER action', () => {
		expect(actions.register(true)).toEqual({
			type: actionTypes.REGISTER,
			isSucceed: true
		})
	});

	it('initBlogs should create FETCH_BLOGS action', () => {
		expect(actions.initBlogs()).toEqual({
			type: actionTypes.FETCH_BLOGS
		})
	});
//!!
	it('blogsInitSuccessful should create FETCH_BLOGS_SUCCESSFUL action', () => {
		expect(actions.blogsInitSuccessful(dummyBlogsResp)).toEqual({
			type: actionTypes.FETCH_BLOGS_SUCCESSFUL,
			blogs: dummyBlogsResp.blogs
		})
	});

	it('blogsInitFail should create FETCH_BLOGS_FAILED action', () => {
		expect(actions.blogsInitFail()).toEqual({
				type: actionTypes.FETCH_BLOGS_FAILED
			});
	});

	it('requestAddBlog should create REQUEST_ADD_BLOG action', () => {
		expect(actions.requestAddBlog(dummyForm)).toEqual({
			type: actionTypes.REQUEST_ADD_BLOG,
			blog: dummyForm
		})
	});

	it('addBlog should create ADD_BLOG action', () => {
		expect(actions.addBlog(dummyBlogElem)).toEqual({
			type: actionTypes.ADD_BLOG,
			id: dummyBlogElem.id,
			blog: dummyBlogElem.blog
		})
	});

	it('requestDeleteBlog should create REQUEST_DELETE_BLOG action', () => {
		expect(actions.requestDeleteBlog(123)).toEqual({
			type: actionTypes.REQUEST_DELETE_BLOG,
			id: 123
		})
	});

	it('deleteBlog should create DELETE_BLOG action', () => {
		expect(actions.deleteBlog(123)).toEqual({
			type: actionTypes.DELETE_BLOG,
			id: 123
		})
	});

	it('failedRequest should create FAILED_REQUEST action', () => {
		expect(actions.failedRequest()).toEqual({
			type: actionTypes.FAILED_REQUEST
		})
	});

	it('setSearchValue should create SET_SEARCH_VALUE action', () => {
		expect(actions.setSearchValue('ololo')).toEqual({
			type: actionTypes.SET_SEARCH_VALUE,
			value: 'ololo'
		})
	});

	it('setSearchParam should create SET_SEARCH_PARAM action', () => {
		expect(actions.setSearchParam('BY_TITLE')).toEqual({
			type: actionTypes.SET_SEARCH_PARAM,
			param: 'BY_TITLE'
		})
	});
})
