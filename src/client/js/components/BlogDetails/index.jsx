import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const BlogDetails = ({blog}) => {
	if (blog) 
		return(
			<div className="blogDetails">
				<dl>
					<dt> Title: </dt>
					<dd> {blog.title} </dd>
					<dt> Author: </dt>
					<dd> {blog.author} </dd>
					<dt> Message: </dt>
					<dd> {blog.message}</dd>
					<dt> Date: </dt>
					<dd> {(new Date(blog.date)).toLocaleString()}</dd>
				</dl>
				<Link to='/blogs'>Blogs main</Link>
			</div>
		)
	else return(
		<div>No such blog</div>
		)
}

export default BlogDetails;