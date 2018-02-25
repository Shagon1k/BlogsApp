import React from 'react';
import AddBlog from '../../containers/AddBlog.jsx';
import SearchBlog from '../../containers/SearchBlog.jsx';
import VisibleBlogsList from '../../containers/VisibleBlogsList.jsx';
import ModalsContainer from '../../containers/ModalsContainer.jsx';
import { Route } from 'react-router-dom';
import './styles.scss';

const BlogsApp = () => (
	<div className="blogsAppContainer">
		<AddBlog />
		<SearchBlog />
		<VisibleBlogsList />
		<ModalsContainer />
	</div>
)

export default BlogsApp;
//<Route path='/blogs/add' component={AddBlogModal} />
//<Route path='/blogs/remove/:id' component={RemoveBlogModal} />