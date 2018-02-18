import React from "react";

class SearchBlog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            value: '',
            option: 'title'
        };

		this.handleChange = this.handleChange.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
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
                <input className="searchBlogInput" type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
            	<form className="searchBlogOption">
            		<label>
            			<input type="radio" value="title" checked={this.state.option === 'title'} onChange={this.handleOptionChange} />
            			by title
            		</label>
            		<label>
            			<input type="radio" value="author" checked={this.state.option === 'author'} onChange={this.handleOptionChange} />
            			by author
            		</label>
            	</form>
            </div>
			);
	}
}

export default SearchBlog;