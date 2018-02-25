import React from 'react';
import AddBlogBtn from '../AddBlogButton/index.jsx';
import SearchBlog from '../../containers/SearchBlog.jsx';
import VisibleBlogsList from '../../containers/VisibleBlogsList.jsx';
import AddBlog from '../../containers/AddBlog.jsx';
import RemoveBlog from '../../containers/RemoveBlog.jsx';
import { Route } from 'react-router-dom';
import './styles.scss';

const BlogsApp = () => (
	<div className="blogsAppContainer">
		<AddBlogBtn />
		<SearchBlog />
		<VisibleBlogsList />
		<Route path='/blogs/add' component={AddBlog} />
		<Route path='/blogs/remove/:id' component={RemoveBlog} />
	</div>
)

export default BlogsApp;