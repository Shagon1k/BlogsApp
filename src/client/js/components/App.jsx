import React from 'react';
import BlogsApp from '../components/BlogsApp/index.jsx';
import BlogDetails from '../containers/BlogDetails/BlogDetails.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => (
	<div className="appContainer">
		<Route path="/blogs" component={BlogsApp} />
		<Route path="/blog/:id" component={BlogDetails} />
	</div>
)

export default App;