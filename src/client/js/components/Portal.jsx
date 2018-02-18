import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
	constructor(props) {
		super(props);

		this.rootSelector = document.getElementById('modal-root');
		this.container = document.createElement('div');
	}

	componentDidMount() {
		this.rootSelector.appendChild(this.container);
	}

	componentWillUnmount() {
		this.rootSelector.removeChild(this.container);
	}

	render() {
		return ReactDOM.createPortal(
		<div className="modal">
			{this.props.children}
		</div>, this.container);
	}
}

export default Portal;