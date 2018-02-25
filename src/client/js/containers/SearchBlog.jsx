import { connect } from 'react-redux';
import { setSearchValue, setSearchParam } from '../actions';
import SearchBlog from '../components/SearchBlog/index.jsx';

const mapStateToProps = state => ({
	search: state.search
})

const mapDispatchToProps = dispatch => {
	return {
		onValueChange: value => {
			dispatch(setSearchValue(value))
		},
		onParamChange: param => {
			dispatch(setSearchParam(param))
		}
	}
}

const SearchBlogContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBlog)

export default SearchBlogContainer;