import React from 'react';
import BlogsApp from './BlogsApp/index.jsx';
import BlogDetails from '../containers/BlogDetails.jsx';
import HomePage from '../containers/HomePage.jsx';
import Login from '../containers/Login.jsx';
import Registration from '../containers/Registration.jsx';
import NoPage from './NoPage/index.jsx';
import { Route, Redirect, Switch, Link } from 'react-router-dom';


const App = ({isLoggedIn}) => (
	<div className="appContainer">
		<Switch>
			<Route key="login" path="/login" component={Login} />
			<Route key="register" path="/register" component={Registration} />
			<Route key="home" exact path="/" component={HomePage} />
			{!isLoggedIn ? <Redirect to="/login" /> : 
				[
					<Route key="blogs" path="/blogs" component={BlogsApp} />,
					<Route key="details" path="/blog/:id" component={BlogDetails} />,
					<Route key="nopage" path="*" component={NoPage} />
				]
			}
		</Switch>
	</div>
)

export default App;