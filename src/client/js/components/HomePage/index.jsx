import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import './styles.scss';

const HomePage = ({isLoggedIn, onLogout, user}) => (
	<div className='homePage'>
		{!isLoggedIn ? 
			<div>
				<Link to="/login">Log in</Link>
				<Link to="/register">Register</Link>
			</div> :
			<div>
				Hi, {user.username}! Welcome to BlogApps!
				<Link to="/blogs">Blogs list</Link>
				<a href="#" onClick={() => onLogout()}>Log out</a>
			</div>
		}
	</div>
)

export default HomePage;