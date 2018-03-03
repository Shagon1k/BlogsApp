import React from 'react';
import BlogsList from '../index.jsx';

describe('BlogsList component', () => {
	const blogs = [
		{
			blog: {},
			id: 1
		},
		{
			blog: {},
			id: 2
		},
		{
			blog: {},
			id: 3
		}
	];
	const initBlogs = jest.fn();

	it('renders correctly', () => {
		const wrapper = shallow(<BlogsList blogs={blogs} initBlogs={initBlogs}/>);
		expect(wrapper).toMatchSnapshot();
		expect(initBlogs).toBeCalled();

	});
})