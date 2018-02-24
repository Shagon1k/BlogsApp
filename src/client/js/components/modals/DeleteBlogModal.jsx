import React from "react";

class DeleteBlogModal extends React.Component {
	constructor(props) {
		super(props);
	}

	closeDeleteBlog(e) {
		e.preventDefault();
		this.props.closeDeleteBlogModal();
	}

	acceptDelete() {
		this.props.acceptDelete();
		this.props.closeDeleteBlogModal();
	}

	render() {
		return (
			<div className="deleteBlogModal">
				<a href="#" className="closeBtn" onClick={(e) => this.closeDeleteBlog(e)}> X </a>
				<span className="message">Do you want delete {this.props.blog.title} blog?</span>
				<div className="buttonSet">
					<button className="btn" onClick={(e) => this.closeDeleteBlog(e)}>No</button>
					<button className="btn" onClick={() => this.acceptDelete()}>Yes</button>
				</div>
			</div>
			);
	}
}

export default DeleteBlogModal;