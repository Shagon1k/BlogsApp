import React from 'react';
import Portal from './Portal.jsx';
import Modal from './modals/index.jsx';

const Modals = ({modals, closeModal}) => (
	<ul className="modals">
		{
			modals.map((item, i) => <Portal key={i} ><Modal item={item} onClose={(item) => closeModal(item)}/></Portal>)
		}
	</ul>
)

export default Modals;