import { connect } from 'react-redux';
import HomePage from '../components/HomePage/index.jsx';
import { requestLogout } from '../actions'

const mapStateToProps = state => ({
	isLoggedIn: state.authentication.isLoggedIn,
	user: state.authentication.user
})

const mapDispatchToProps = dispatch => ({
	onLogout: () => {
		dispatch(requestLogout());
	}
})

const HomePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)

export default HomePageContainer;