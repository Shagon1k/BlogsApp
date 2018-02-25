import React from 'react';
import BlogsApp from '../components/BlogsApp/index.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => (
	<div className="appContainer">
		<Route path="/blogs" component={BlogsApp} />
	</div>
)

export default App;