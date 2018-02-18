import React from "react";
import Portal from "./Portal.jsx";
import DeleteBlogModal from "./modals/DeleteBlogModal.jsx"

class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showDeleteBlogModal: false
		}

		this.onDelete = this.onDelete.bind(this);
		this.closeDeleteBlogModal = this.closeDeleteBlogModal.bind(this);
		this.openDeleteBlogModal = this.openDeleteBlogModal.bind(this);
	}

	onDelete() {
		this.props.onDelete(this.props.blog);
	}

	closeDeleteBlogModal() {
		this.setState({ showDeleteBlogModal: false })
	}

	openDeleteBlogModal(e) {
		e.preventDefault();
		this.setState({ showDeleteBlogModal: true })
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
				<a href="#" className="removeBlog" onClick={this.openDeleteBlogModal}> X </a>
				{ this.state.showDeleteBlogModal &&
					<Portal>
						<DeleteBlogModal 
							blog= {this.props.blog} 
							closeDeleteBlogModal={this.closeDeleteBlogModal} 
							acceptDelete={this.onDelete}
						/>
					</Portal>
				}
			</li>
			);
	}
}

export default Blog;