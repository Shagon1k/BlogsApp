import React from 'react';
import AddBlog from '../containers/AddBlog.jsx';
import SearchBlogContainer from '../containers/SearchBlogContainer.jsx';
import VisibleBlogsList from '../containers/VisibleBlogsList.jsx';
import ModalsContainer from '../containers/ModalsContainer.jsx';

const App = () => (
	<div className="container">
		<AddBlog />
		<SearchBlogContainer />
		<VisibleBlogsList />
		<ModalsContainer />
	</div>
)

export default App;