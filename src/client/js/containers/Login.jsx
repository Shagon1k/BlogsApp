import { connect } from 'react-redux';
import { requestLogin } from '../actions';
import LoginForm from '../components/LoginForm/index.jsx';

const mapStateToProps = state => ({
	isLoggedIn: state.authentication.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	onLogin: (loginForm) => {dispatch(requestLogin(loginForm))}
})

const Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm)

export default Login;