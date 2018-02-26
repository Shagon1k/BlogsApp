import { connect } from 'react-redux';
import { addBlog } from '../../actions';
import AddBlogModal from '../../components/BlogsApp/modals/AddBlogModal/index.jsx';

const mapDispatchToProps = dispatch => ({
		onConfirm: (blog) => {dispatch(addBlog(blog))}
})

const AddBlog = connect(
	null,
	mapDispatchToProps
)(AddBlogModal)

export default AddBlog;