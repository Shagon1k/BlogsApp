import React from 'react';
import Blog from '../index.jsx';

describe('Blog component', () => {
	const dummyBlog = {
		title: 'Ololo',
		author: 'Ololosh',
		message: 'Olomessage'
	};
	const dummyBlogId = 123;

	it('renders correctly', () => {
		const wrapper = shallow(<Blog blog={dummyBlog} id={dummyBlogId}/>);
		expect(wrapper).toMatchSnapshot();
	});
})