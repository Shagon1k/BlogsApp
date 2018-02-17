import React from "react";

class DeleteBlogModal extends React.Component {
	constructor(props) {
		super(props);

		this.closeDeleteBlog = this.closeDeleteBlog.bind(this);
		this.acceptDelete = this.acceptDelete.bind(this);
	}

	closeDeleteBlog() {
		this.props.closeDeleteBlogModal();
	}

	acceptDelete() {
		this.props.acceptDelete(this.props.blog);
		this.props.closeDeleteBlogModal();
	}

	render() {
		return (
			<div className="deleteBlogModal">
				<a href="#" className="removeBlog" onClick={ this.closeDeleteBlog }> X </a>
				<button onClick={ this.acceptDelete }>Yes</button>
            </div>
			);
	}
}

export default DeleteBlogModal;