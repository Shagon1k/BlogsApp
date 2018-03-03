import { connect } from 'react-redux';
import { requestRegister } from '../actions';
import RegistrationForm from '../components/RegistrationForm/index.jsx';

const mapStateToProps = state => ({
	isLoggedIn: state.authentication.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	onRegister: (registerForm) => {dispatch(requestRegister(registerForm))}
})

const Registration = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegistrationForm)

export default Registration;