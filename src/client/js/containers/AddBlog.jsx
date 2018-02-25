import { connect } from 'react-redux';
import { addBlog, openModal } from '../actions';
import AddBlogButton from '../components/AddBlogButton.jsx'

const mapDispatchToProps = dispatch => {
	return {
		onBlogAdd: () => {
			dispatch(openModal({
				type: 'add-blog',
				onConfirm: (blog) => {dispatch(addBlog(blog))}
				})
			)
		}
	}
}

const AddBlog = connect(
	null,
	mapDispatchToProps
)(AddBlogButton)

export default AddBlog;