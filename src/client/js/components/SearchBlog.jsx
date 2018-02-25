import React from "react";

const SearchBlog = ({search, onValueChange, onParamChange}) => (
			<div className="searchBlog">
                <input className="searchBlogInput" type="text" placeholder="Search" value={search.searchValue} onChange={(e) => onValueChange(e.target.value)} />
            	<form className="searchBlogOption">
            		<label>
            			<input type="radio" value="BY_TITLE" checked={search.searchParam === 'BY_TITLE'} onChange={(e) => onParamChange(e.target.value)} />
            			by title
            		</label>
            		<label>
            			<input type="radio" value="BY_AUTHOR" checked={search.searchParam === 'BY_AUTHOR'} onChange={(e) => onParamChange(e.target.value)} />
            			by author
            		</label>
            	</form>
            </div>
	)

export default SearchBlog;