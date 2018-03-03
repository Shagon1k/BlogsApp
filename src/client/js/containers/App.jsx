import { connect } from 'react-redux';
import App from '../components/App.jsx';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
		isLoggedIn: state.authentication.isLoggedIn
})

const AppContainer = withRouter(connect(
	mapStateToProps
)(App))

export default AppContainer;