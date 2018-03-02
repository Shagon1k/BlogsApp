import React from 'react';
import LoginPage from '../index.jsx';

describe('LoginForm component', () => {
	const onLogin = jest.fn();

	it('renders "You are logged in!" if user is logged in', () => {
		const wrapper = shallow(<LoginPage isLoggedIn={true} onLogin={onLogin}/>);
		expect(wrapper).toMatchSnapshot();

	});
	
	it('renders login form if user is not logged in', () => {
		const wrapper = shallow(<LoginPage isLoggedIn={false} onLogin={onLogin}/>);
		expect(wrapper).toMatchSnapshot();

		wrapper.find('.loginBtn').simulate('click');
		expect(onLogin).toBeCalled();
	})
})