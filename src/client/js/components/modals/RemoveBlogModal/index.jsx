import React from 'react';
import Portal from '../../Portal.jsx'
import './styles.scss';

const RemoveBlogModal = ({onConfirm, onClose, message}) => (
	<Portal>
		<div className="confirmModal">
			<a href="#" className="closeBtn" onClick={() => onClose()}> X </a>
			<span className="message">{message}</span>
			<div className="buttonSet">
				<button className="btn" onClick={() => onClose()}>No</button>
				<button className="btn" onClick={() => onConfirm()}>Yes</button>
			</div>
		</div>
	</Portal>
)

export default RemoveBlogModal;
