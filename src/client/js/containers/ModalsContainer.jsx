import { connect } from 'react-redux';
import { closeModal } from '../actions';
import Modals from '../components/Modals.jsx';

const mapStateToProps = state => {
	return {
		modals: state.modals
	}
}

const mapDispatchToProps = dispatch => {
	return {
		closeModal: modalObj => {
			dispatch(closeModal(modalObj))
		}
	}
}

const ModalsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Modals)

export default ModalsContainer;