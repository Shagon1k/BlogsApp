import { connect } from 'react-redux';
import { deleteBlog } from '../actions';
import BlogsList from '../components/BlogsList/index.jsx';

const getVisibleBlogs = (blogs, search) => {
	let searchParam;
	if (search.searchParam === 'BY_TITLE') {
		searchParam = 'title';
	} else if (search.searchParam === 'BY_AUTHOR') {
		searchParam = 'author';
	}

	return blogs.filter(i => i.blog[searchParam].includes(search.searchValue))
}

const mapStateToProps = state => ({
	blogs: getVisibleBlogs(state.blogs, state.search)
})

const VisibleBlogsList = connect(
	mapStateToProps,
	null
)(BlogsList)

export default VisibleBlogsList;