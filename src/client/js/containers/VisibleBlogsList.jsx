import { connect } from 'react-redux';
import { deleteBlog, openModal } from '../actions';
import BlogsList from '../components/BlogsList.jsx';

const getVisibleBlogs = (blogs, search) => {
	let searchParam;
	if (search.searchParam === 'BY_TITLE') {
		searchParam = 'title';
	} else if (search.searchParam === 'BY_AUTHOR') {
		searchParam = 'author';
	}

	return blogs.filter(i => i.blog[searchParam].includes(search.searchValue))
}

const mapStateToProps = state => {
	return {
		blogs: getVisibleBlogs(state.blogs, state.search)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onBlogDelete: (id, blog) => {
			dispatch(openModal({
				id: id,
				type: 'confirmation',
				message: `Are you sure to delete ${blog.title}?`,
				onConfirm: () => {dispatch(deleteBlog(id))}
				})
			)
		}
	}
}

const VisibleBlogsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(BlogsList)

export default VisibleBlogsList;