import { connect } from 'react-redux';
import { requestAddBlog } from '../../actions';
import AddBlogModal from '../../components/BlogsApp/modals/AddBlogModal/index.jsx';

const mapDispatchToProps = dispatch => ({
		onConfirm: (blog) => {dispatch(requestAddBlog(blog))}
})

const AddBlog = connect(
	null,
	mapDispatchToProps
)(AddBlogModal)

export default AddBlog;