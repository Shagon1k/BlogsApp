import { loop, Cmd } from 'redux-loop';
import { login, logout, register, failedRequest } from '../actions';
import { requestLoginCall, requestLogoutCall, requestRegisterCall } from '../effects/authentication.js';
import { actionTypes } from '../config.js';

const authentication = (state = {isLoggedIn: false, user: null}, action) => {
	switch (action.type) {
		case actionTypes.REQUEST_LOGIN:
			return loop(
				state,
				Cmd.run(requestLoginCall, {
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
				Cmd.run(requestLogoutCall, {
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
				Cmd.run(requestRegisterCall, {
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