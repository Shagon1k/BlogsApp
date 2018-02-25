import React from 'react';
import Blog from '../Blog/index.jsx';
import './styles.scss';

const BlogsList = ({blogs, onBlogDelete}) => (
	<ul className="blogList">
		{
			blogs.map((i) => <Blog key={i.id} blog={i.blog} blogId={i.id} onDelete={() => onBlogDelete(i.id, i.blog)} />)
		}
	</ul>
)

export default BlogsList;