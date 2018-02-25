import { connect } from 'react-redux';
import { addBlog } from '../../actions';
import AddBlogModal from '../../components/BlogsApp/modals/AddBlogModal/index.jsx';

const mapStateToProps = (state, ownProps) => ({
	onClose: () => {ownProps.history.push('/blogs')}
})

const mapDispatchToProps = dispatch => ({
		onConfirm: (blog) => {dispatch(addBlog(blog))}
})

const AddBlog = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddBlogModal)

export default AddBlog;