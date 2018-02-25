import { connect } from 'react-redux';
import BlogDetails from '../components/BlogDetails/index.jsx';

const mapStateToProps = state => {
	return {
		
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

const BlogDetailsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BlogDetails)

export default BlogDetailsContainer;