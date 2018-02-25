import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const AddBlogBtn = () => (
	<Link to="/blogs/add" className="addBlog btn">Add blog</Link>
)

export default AddBlogBtn;