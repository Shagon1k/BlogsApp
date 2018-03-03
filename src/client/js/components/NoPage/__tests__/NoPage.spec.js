import React from 'react';
import NoPage from '../index.jsx';

describe('NoPage component', () => {
	it('renders "No such page" correctly', () => {
		const wrapper = shallow(<NoPage/>);
		expect(wrapper).toMatchSnapshot();
	});
	
})