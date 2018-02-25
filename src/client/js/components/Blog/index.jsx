import React from 'react';
import './styles.scss';

const Blog = ({blog, onDelete}) => (
	<li className="blogBox">
		<dl className="blogInfo">
			<dt> Title: </dt>
			<dd> {blog.title} </dd>
			<dt> Author: </dt>
			<dd> {blog.author} </dd>
			<dt> Message: </dt>
			<dd> {blog.message}</dd>
		</dl>
		<a href="#" className="removeBlog" onClick={() => onDelete()}> X </a>
	</li>
)

export default Blog;