import { SERVER_URL } from '../config.js';

export const requestLogin = userform => 
	fetch(`${SERVER_URL}/users/login`, {
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

export const requestLogout = () => 
	fetch(`${SERVER_URL}/users/logout`, {
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


export const requestRegister = regform => 
	fetch(`${SERVER_URL}/users/register`, {
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