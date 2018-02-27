import React from 'react';
import Portal from '../../../Portal.jsx'
import './styles.scss';

class RemoveBlogModal extends React.Component {
	constructor(props) {
		super(props);
	}

	onClose(e) {
		if (e) e.preventDefault();
		this.props.history.push('/blogs');
	}

	onConfirm() {
		this.props.onConfirm();
		this.props.history.push('/blogs');
	}

	render() {
		return(
		<Portal>
			<div className="confirmModal">
				<a href="#" className="closeBtn" onClick={(e) => this.onClose(e)}> X </a>
				<span className="message"> Do you really want to delete {this.props.blogTitle} blog?</span>
				<div className="buttonSet">
					<button className="btn" onClick={() => this.onClose()}>No</button>
					<button className="btn" onClick={() => this.onConfirm()}>Yes</button>
				</div>
			</div>
		</Portal>
		);
	}
}

export default RemoveBlogModal;
