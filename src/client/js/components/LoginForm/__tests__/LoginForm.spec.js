import React from 'react';
import LoginForm from '../index.jsx';

describe('LoginForm component', () => {
	const onLogin = jest.fn();

	it('renders "You are logged in!" if user is logged in', () => {
		const wrapper = shallow(<LoginForm isLoggedIn={true} onLogin={onLogin}/>);
		expect(wrapper).toMatchSnapshot();

	});
	
	it('renders login form if user is not logged in', () => {
		const wrapper = shallow(<LoginForm isLoggedIn={false} onLogin={onLogin}/>);
		expect(wrapper).toMatchSnapshot();
	})

	it('not handles submit if fields not filled event correctly', () => {
		const wrapper = shallow(<LoginForm isLoggedIn={false} onLogin={onLogin}/>);
		
		wrapper.find('.loginForm').simulate('submit', { preventDefault() {} });
		expect(onLogin).not.toBeCalled();		
	})

	it('handles submit event correctly', () => {
		const wrapper = shallow(<LoginForm isLoggedIn={false} onLogin={onLogin}/>);
		
		wrapper.setState({
			username : 'Ololo', 
			password: 'password'
		}); 
		wrapper.find('.loginForm').simulate('submit', { preventDefault() {} });
		expect(onLogin).toBeCalled();		
	})
})