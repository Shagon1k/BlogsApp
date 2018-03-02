import React from 'react';
import HomePage from '../index.jsx';

describe('HomePage component', () => {
	const user = {
			username: 'Vasya',
			email: 'vasya@gmail.com'
		};
	const onLogout = jest.fn();

	it('renders "Please Log In or Register message" if user is not logged in', () => {
		const wrapper = shallow(<HomePage isLoggedIn={false} onLogout={onLogout} user={null}/>)
		expect(wrapper).toMatchSnapshot();

		wrapper.find('.logoutLink').simulate('click');
		expect(onLogout).toBeenCalled();
	});
	
	it('renders "Welcome to BlogsApp" message if user is logged in', () => {
		const wrapper = shallow(<HomePage isLoggedIn={true} onLogout={onLogout} user={user}/>);
		expect(wrapper).toMatchSnapshot();
	})
})