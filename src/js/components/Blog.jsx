import React from "react";

class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(e) {
		e.preventDefault();
		this.props.onDelete(this.props.blog);
	}

	render() {
		return (
			<li className="blogBox">
				<dl className="blogInfo">
					<dt> Title: </dt>
					<dd> {this.props.blog.title} </dd>
					<dt> Author: </dt>
					<dd> {this.props.blog.author} </dd>
					<dt> Message: </dt>
					<dd> {this.props.blog.message}</dd>
				</dl>
				<a href="#" className="removeBlog" onClick={ this.onDelete }> X </a>
			</li>
			);
	}
}

export default Blog;