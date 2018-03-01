import React from 'react';
import AddBlogBtn from './AddBlogButton/index.jsx';
import SearchBlog from '../../containers/BlogsApp/SearchBlog.jsx';
import VisibleBlogsList from '../../containers/BlogsApp/VisibleBlogsList.jsx';
import AddBlog from '../../containers/BlogsApp/AddBlog.jsx';
import RemoveBlog from '../../containers/BlogsApp/RemoveBlog.jsx';
import { Route, Link } from 'react-router-dom';
import './styles.scss';

const BlogsApp = () => (
	<div className="blogsAppContainer">
		<Link className="lnk homePageLnk" to="/">Home Page</Link>
		<AddBlogBtn />
		<SearchBlog />
		<VisibleBlogsList />
		<Route path='/blogs/add' component={AddBlog} />
		<Route path='/blogs/remove/:id' component={RemoveBlog} />
	</div>
)

export default BlogsApp;