import React from 'react';
import ConfirmModal from './ConfirmModal.jsx';
import AddBlogModal from './AddBlogModal.jsx';

class Modal extends React.Component {
	onClose() {
		if (this.props.item.onClose) {
			this.props.item.onClose();
			this.props.onClose(this.props.item);
		} else {
			this.props.onClose(this.props.item);
		}
	}

	onConfirm(blog) {
		if (this.props.item.onConfirm) {
			this.props.item.onConfirm(blog);
			this.props.onClose(this.props.item);
		}
	}

	render() {
		const { type } = this.props.item;
		if (type === 'confirmation') {
			const { message } = this.props.item;
			return (
				<ConfirmModal message={message} onClose={() => this.onClose()} onConfirm={() => this.onConfirm()} />
				)
		} else if (type === 'add-blog') {
			return (
				<AddBlogModal onClose={() => this.onClose()} onConfirm={(blog) => this.onConfirm(blog)} />
			)
		}
		return (
				<div></div>
		);
	}
}

export default Modal;