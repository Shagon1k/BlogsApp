import React from "react";

class SearchBlog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            value: '',
            option: 'title'
        };
	}

	handleChange(e) {
		this.setState({value: e.target.value}, function() {
			this.props.onSearchChange(this.state)
		})
	}

	handleOptionChange(e) {
		this.setState({option: e.target.value}, function() {
			this.props.onSearchChange(this.state)
		})
	}

	render() {
		return (
			<div className="searchBlog">
                <input className="searchBlogInput" type="text" placeholder="Search" value={this.state.value} onChange={(e) => this.handleChange(e)} />
            	<form className="searchBlogOption">
            		<label>
            			<input type="radio" value="title" checked={this.state.option === 'title'} onChange={(e) => this.handleOptionChange(e)} />
            			by title
            		</label>
            		<label>
            			<input type="radio" value="author" checked={this.state.option === 'author'} onChange={(e) => this.handleOptionChange(e)} />
            			by author
            		</label>
            	</form>
            </div>
			);
	}
}

export default SearchBlog;