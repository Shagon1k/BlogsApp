import React from 'react';
import AddBlogButton from '../index.jsx';

describe('AddBlogButton component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<AddBlogButton/>);
		expect(wrapper).toMatchSnapshot();
	});
})