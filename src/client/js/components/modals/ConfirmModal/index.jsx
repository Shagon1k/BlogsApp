import React from 'react';
import './styles.scss';

const ConfirmModal = ({message, onConfirm, onClose}) => (
	<div className="confirmModal">
		<a href="#" className="closeBtn" onClick={() => onClose()}> X </a>
		<span className="message">{message}</span>
		<div className="buttonSet">
			<button className="btn" onClick={() => onClose()}>No</button>
			<button className="btn" onClick={() => onConfirm()}>Yes</button>
		</div>
	</div>
)

export default ConfirmModal;
