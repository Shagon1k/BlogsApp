import { connect } from 'react-redux';
import { requestDeleteBlog } from '../../actions';
import RemoveBlogModal from '../../components/BlogsApp/modals/RemoveBlogModal/index.jsx';

const mapStateToProps = (state, ownProps) => {
	const blogObj = state.blogs.find((i) => i.id === ownProps.match.params.id);
	return {
		blogTitle: blogObj.blog.title
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onConfirm: () => {
		dispatch(requestDeleteBlog(ownProps.match.params.id));
	}
})

const RemoveBlog = connect(
	mapStateToProps,
	mapDispatchToProps
)(RemoveBlogModal)

export default RemoveBlog;