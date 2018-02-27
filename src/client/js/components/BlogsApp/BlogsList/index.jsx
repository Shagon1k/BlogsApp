import React from 'react';
import Blog from '../Blog/index.jsx';
import './styles.scss';


class BlogsList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.initBlogs();
	}

	render() {
		return (
			<ul className="blogList">
				{
					this.props.blogs.map((i) => <Blog key={i.id} blog={i.blog} blogId={i.id} />)
				}
			</ul>
		);
	}
}

export default BlogsList;