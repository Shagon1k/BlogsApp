import React from 'react';
import RegistrationForm from '../index.jsx';

describe('RegistrationForm component', () => {
	const onRegister = jest.fn();

	it('renders "You are logged in!" if user is logged in', () => {
		const wrapper = shallow(<RegistrationForm isLoggedIn={true} onRegister={onRegister}/>);
		expect(wrapper).toMatchSnapshot();

	});
	
	it('renders register form if user is not logged in', () => {
		const wrapper = shallow(<RegistrationForm isLoggedIn={false} onRegister={onRegister}/>);
		expect(wrapper).toMatchSnapshot();
	})

	it('not handles submit if fields not filled event correctly', () => {
		const wrapper = shallow(<RegistrationForm isLoggedIn={false} onRegister={onRegister}/>);
		
		wrapper.find('.registrationForm').simulate('submit', { preventDefault() {} });
		expect(onRegister).not.toBeCalled();		
	})

	it('handles submit event correctly', () => {
		const wrapper = shallow(<RegistrationForm isLoggedIn={false} onRegister={onRegister}/>);
		
		wrapper.instance().setState({
			username : 'Ololo', 
			email: 'ololo@gmail.com', 
			password: 'password', 
			password2: 'password'
		}); 

		wrapper.find('.registrationForm').simulate('submit', { preventDefault() {} });
		expect(onRegister).toBeCalled();		
	})
})