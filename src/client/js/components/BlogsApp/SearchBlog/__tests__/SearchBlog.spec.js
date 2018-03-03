import React from 'react';
import SearchBlog from '../index.jsx';

describe('SearchBlog component', () => {
	const search = {
		searchParam: 'BY_TITLE',
		searchValue: ''
	};
	const onValueChange = jest.fn();
	const onParamChange = jest.fn();

	it('renders correctly', () => {
		const wrapper = shallow(<SearchBlog onValueChange={onValueChange} onParamChange={onParamChange} search={search}/>);
		expect(wrapper).toMatchSnapshot();

	});
	
	it('triggers onParamValue function correctly', () => {
		const wrapper = shallow(<SearchBlog onValueChange={onValueChange} onParamChange={onParamChange} search={search}/>);
		wrapper.find('.searchBlogInput').simulate('change', {target: {value: 'ololo'}});
		expect(onValueChange).toBeCalled();
	})
})