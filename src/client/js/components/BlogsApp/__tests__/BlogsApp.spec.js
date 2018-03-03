import React from 'react';
import BlogsApp from '../index.jsx';

describe('BlogsApp component', () => {
	it('renders BlogsApp correctly', () => {
		const wrapper = shallow(<BlogsApp/>);
		expect(wrapper).toMatchSnapshot();
	});
})