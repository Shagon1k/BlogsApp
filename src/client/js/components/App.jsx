import React from 'react';
import BlogsApp from '../components/BlogsApp/index.jsx';
import BlogDetailsContainer from '../containers/BlogDetailsContainer.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => (
	<div className="appContainer">
		<Route path="/blogs" component={BlogsApp} />
		<Route path="/blog/:id" component={BlogDetailsContainer} />
	</div>
)

export default App;