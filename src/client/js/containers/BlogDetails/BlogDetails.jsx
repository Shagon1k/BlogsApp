import { connect } from 'react-redux';
import BlogDetails from '../../components/BlogDetails/index.jsx';

const mapStateToProps = (state, ownProps) => {
	const blogId = ownProps.match.params.id;
	const blogObj = state.blogs.find((i) => i.id === blogId)
	return {
		blog: blogObj ? blogObj.blog : null
	}
}

const BlogDetailsContainer = connect(
	mapStateToProps,
	null
)(BlogDetails)

export default BlogDetailsContainer;