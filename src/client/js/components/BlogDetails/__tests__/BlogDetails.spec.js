import React from 'react';
import BlogDetails from '../index.jsx';

describe('BlogDetails component', () => {
	it('renders blogs details correctly', () => {
	const blog = {
		title: 'title',
		author: 'author',
		message: 'message',
		date: '2018-03-01T13:37:08.068Z'
	};
	const wrapper = shallow(<BlogDetails blog={blog}/>)
	expect(wrapper).toMatchSnapshot();
	});
	
	it('renders no blog info correctly', () => {
		const blog = null;
		const wrapper = shallow(<BlogDetails blog={blog} />);
		expect(wrapper).toMatchSnapshot();
	})
})
