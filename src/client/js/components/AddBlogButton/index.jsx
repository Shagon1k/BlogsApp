import React from 'react';
import './styles.scss';

const AddBlogButton = ({onBlogAdd}) => (
	<button className="addBlogBtn btn" onClick={() => onBlogAdd()} >Add blog</button>
)

export default AddBlogButton;