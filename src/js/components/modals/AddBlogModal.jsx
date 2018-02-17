import React from "react";

class AddBlogModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			author: '',
			message: ''
		}

		this.closeAddBlog = this.closeAddBlog.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	closeAddBlog(e) {
		e.preventDefault();
		this.props.closeAddBlogModal();
	}

	handleInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.title || !this.state.author || !this.state.message) return;
		this.props.onAddBlog({
			title: this.state.title,
			author: this.state.author,
			message: this.state.message
		})
		this.props.closeAddBlogModal();
	}

	render() {
		return (
			<div className="addBlogModal">
				<a href="#" className="closeBtn" onClick={ this.closeAddBlog }> X </a>
				<form className="addBlogForm" onSubmit={this.handleSubmit}>
					<label htmlFor="inputTitle">Title:</label>
					<input name="title" id="inputTitle" type="text" value={this.state.title} onChange={this.handleInputChange} />
					<label htmlFor="inputAuthor">Author:</label>
					<input name="author" id="inputAuthor" type="text" value={this.state.author} onChange={this.handleInputChange} />
					<label htmlFor="inputMessage">Message:</label>
					<textarea name="message" id="inputMessage" value={this.state.message} onChange={this.handleInputChange} />
					<button className="addBlogBtn btn">Add blog</button>
				</form>
			</div>
			);
	}
}

export default AddBlogModal;