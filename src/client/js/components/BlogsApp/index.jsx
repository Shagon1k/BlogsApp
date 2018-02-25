import React from 'react';
import AddBlog from '../../containers/AddBlog.jsx';
import SearchBlogContainer from '../../containers/SearchBlogContainer.jsx';
import VisibleBlogsList from '../../containers/VisibleBlogsList.jsx';
import ModalsContainer from '../../containers/ModalsContainer.jsx';
import './styles.scss';

const BlogsApp = () => (
	<div className="blogsAppContainer">
		<AddBlog />
		<SearchBlogContainer />
		<VisibleBlogsList />
		<ModalsContainer />
	</div>
)

export default BlogsApp;
