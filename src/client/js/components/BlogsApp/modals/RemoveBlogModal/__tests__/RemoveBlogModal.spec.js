import React from 'react';
import RemoveBlogModal from '../index.jsx';
import { createMemoryHistory } from 'history';

describe('RemoveBlogModal component', () => {
	const onConfirm = jest.fn();
	const dummyBlogTitle = 'Title';
	const history = createMemoryHistory('/dashboard')

	it('renders correctly', () => {
		const wrapper = shallow(<RemoveBlogModal history={history} onConfirm={onConfirm} dummyBlogTitle={dummyBlogTitle}/>);
		expect(wrapper).toMatchSnapshot();

	});
	
	it('triggers onConfirm when button clicked', () => {
		const wrapper = shallow(<RemoveBlogModal history={history} onConfirm={onConfirm} dummyBlogTitle={dummyBlogTitle}/>);
		wrapper.find('.buttonSet button').at(1).simulate('click');
		expect(onConfirm).toBeCalled();
	})
})