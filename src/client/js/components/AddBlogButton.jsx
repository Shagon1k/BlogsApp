import React from 'react';

const AddBlogButton = ({onBlogAdd}) => (
	<button className="addBlogBtn btn" onClick={() => onBlogAdd()} >Add blog</button>
)

export default AddBlogButton;