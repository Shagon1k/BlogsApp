import React from 'react';
import './styles.scss';

class AddBlogModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			author: '',
			message: ''
		}
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
		this.props.onConfirm({
			title: this.state.title,
			author: this.state.author,
			message: this.state.message
		})
		this.props.onClose();
	}

	render() {
		return (
			<div className="addBlogModal">
				<a href="#" className="closeBtn" onClick={() => this.props.onClose()}> X </a>
				<form className="addBlogForm" onSubmit={(e) => this.handleSubmit(e)}>
					<label htmlFor="inputTitle">Title:</label>
					<input name="title" id="inputTitle" type="text" value={this.state.title} onChange={(e) => this.handleInputChange(e)} />
					<label htmlFor="inputAuthor">Author:</label>
					<input name="author" id="inputAuthor" type="text" value={this.state.author} onChange={(e) => this.handleInputChange(e)} />
					<label htmlFor="inputMessage">Message:</label>
					<textarea name="message" id="inputMessage" value={this.state.message} onChange={(e) => this.handleInputChange(e)} />
					<button className="addBlogBtn btn">Add blog</button>
				</form>
			</div>
			);
	}
}

export default AddBlogModal;
