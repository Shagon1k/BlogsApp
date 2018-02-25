import React from 'react';
import Blog from './Blog.jsx';

const BlogsList = ({blogs, onBlogDelete}) => (
	<ul className="blogList">
		{
			blogs.map((i) => <Blog key={i.id} blog={i.blog} onDelete={() => onBlogDelete(i.id, i.blog)} />)
		}
	</ul>
)

export default BlogsList;