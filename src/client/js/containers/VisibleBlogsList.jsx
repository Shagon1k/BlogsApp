import { connect } from 'react-redux';
import { deleteBlog } from '../actions';
import BlogsList from '../components/BlogsList';

const getVisibleBlogs = (blogs, search) => {
	return blogs.filter(blog => blog[search.searchParam].includes(search.searchValue)))
}

const mapStateToProps = state => {
	return {
		blogs: getVisibleBlogs(state.blogs, state.search)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onBlogDelete: id => {
			dispatch(removeBlog(id))
		}
	}
}

const VisibleBlogsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(BlogsList)

export default VisibleBlogsList;