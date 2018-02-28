import { loop, Cmd } from 'redux-loop';
import { login, logout, register, failedRequest } from '../actions';
import { SERVER_URL, actionTypes } from '../config.js';

const authentication = (state = {isLoggedIn: false, user: null}, action) => {
	switch (action.type) {
		case actionTypes.REQUEST_LOGIN:
			return loop(
				state,
				Cmd.run(requestLogin, {
					successActionCreator: login,
					failActionCreator: failedRequest,
					args: [action.userform]
				}))
		case actionTypes.LOGIN:
			return {
				isLoggedIn: true,
				user: action.user
			}
		case actionTypes.REQUEST_LOGOUT:
			return loop(
				state,
				Cmd.run(requestLogout, {
					successActionCreator: logout,
					failActionCreator: failedRequest
				}))
		case actionTypes.LOGOUT:
			return action.isSucceed ? {
				...state,
				isLoggedIn: false,
				user: null
			} : state
		case actionTypes.REQUEST_REGISTER:
			return loop(
				state,
				Cmd.run(requestRegister, {
					successActionCreator: register,
					failActionCreator: failedRequest,
					args: [action.regform]
				}))
		case actionTypes.REGISTER:
			return state			
		default:
			return state
	}
}

export default authentication;

function requestLogin(userform) {
	return fetch(`${SERVER_URL}/users/login`, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userform)
		})
		.then(resp => resp.json())
		.then((resp) => {
			return {
				username: resp.user.username,
				email: resp.user.email
			};
		})
}

function requestLogout() {
	return fetch(`${SERVER_URL}/users/logout`, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(resp => resp.json())
		.then((resp) => {
			return resp.success;
		})
}

function requestRegister(regform) {
		return fetch(`${SERVER_URL}/users/register`, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(regform)
		})
		.then(resp => resp.json())
		.then((resp) => {
			return resp.success;
		})
}