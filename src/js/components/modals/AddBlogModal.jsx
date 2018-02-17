import React from "react";

class AddBlogModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		this.closeAddBlog = this.closeAddBlog.bind(this);
	}

	closeAddBlog(e) {
		this.props.closeAddBlogModal(this.state.value);
	}

	render() {
		return (
			<form className="ololo">
				<a href="#" className="removeBlog" onClick={ this.closeAddBlog }> X </a>
            </form>
			);
	}
}

export default AddBlogModal;