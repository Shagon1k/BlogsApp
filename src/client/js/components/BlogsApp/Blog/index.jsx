import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Blog = ({blog, blogId}) => (
	<li className="blogBox">
		<dl className="blogInfo">
			<dt> Title: </dt>
			<dd> {blog.title} </dd>
			<dt> Author: </dt>
			<dd> {blog.author} </dd>
			<dt> Message: </dt>
			<dd> {blog.message}</dd>
		</dl>
		<Link to={`/blogs/remove/${blogId}`} className="removeBlog"> X </Link>
		<Link className="blogDetailsLink" to={`/blog/${blogId}`}> Blog details </Link>
	</li>
)

export default Blog;