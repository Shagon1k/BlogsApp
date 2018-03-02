import { loop, Cmd } from 'redux-loop';
import { requestLogin, requestLogout, requestRegister, login, logout, register, failedRequest } from '../../actions';
import { requestLoginCall, requestLogoutCall, requestRegisterCall } from '../../effects/authentication.js';
import authentication from '../authentication.js';
import { actionTypes } from '../../config.js';

describe('authentication reducer', () => {
	const initialState = {isLoggedIn: false, user: null},
		loggedInState = {isLoggedIn: true, user: {username:'Ololosh', email: 'ololo@gmail.com'}},
		dummyUser = {
			username: 'Ololosh', 
			email: 'ololo@gmail.com'},
		dummyForm = {
			username: 'Ololosh', 
			password: 'password'},
		dummyRegisterForm = {
			username: 'Ololosh', 
			password: 'password', 
			password2: 'password2', 
			email: 'ololo@gmail.com'};

	it('should handle initial state', () => {
		expect(authentication(undefined, {})).toEqual(initialState);
	});

	it('should handle REQUEST_LOGIN action', () => {
		const result = authentication(initialState, requestLogin(dummyForm));

		expect(loop(
				initialState,
				Cmd.run(requestLoginCall, {
					successActionCreator: login,
					failActionCreator: failedRequest,
					args: [dummyForm]
				})
			))
			.toEqual(result);
	});

	it('should handle LOGIN', () => {
		expect(authentication(initialState, {
			type: actionTypes.LOGIN,
			user: dummyUser
		})).toEqual({
			isLoggedIn: true,
			user: dummyUser
		})
	});

	it('should handle REQUEST_LOGOUT action', () => {
		const result = authentication(loggedInState, requestLogout());
		
		expect(loop(
				loggedInState,
				Cmd.run(requestLogoutCall, {
					successActionCreator: logout,
					failActionCreator: failedRequest
				})
			))
			.toEqual(result);
	});

	it('should handle succeed LOGOUT', () => {
		expect(authentication(loggedInState, {
			type: actionTypes.LOGOUT,
			isSucceed: true
		})).toEqual({
			isLoggedIn: false,
			user: null
		})
	});

	it('should handle failed LOGOUT', () => {
		expect(authentication(loggedInState, {
			type: actionTypes.LOGOUT,
			isSucceed: false
		})).toEqual(loggedInState)
	});

	it('should handle REQUEST_REGISTER action', () => {
		const result = authentication(initialState, requestRegister(dummyRegisterForm));

		expect(loop(
				initialState,
				Cmd.run(requestRegisterCall, {
					successActionCreator: register,
					failActionCreator: failedRequest,
					args: [dummyRegisterForm]
				})
			))
			.toEqual(result);
	});
});