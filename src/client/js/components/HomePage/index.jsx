import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import './styles.scss';

const HomePage = ({isLoggedIn, onLogout, user}) => (
	<div className='homePage'>
		{!isLoggedIn ? 
			[
				<span className="infoText">
					Hello! Welcome to BlogsApp!
				</span>,
				<span className="infoText">
					Please <Link className="lnk loginLnk" to="/login">Log in</Link> or <Link className="lnk registerLnk" to="/register">Register</Link> to proceed.
				</span>
			] :
			[
				<span className="infoText">
					Hello, <span className="userName">{user.username}</span>! Welcome to BlogApps!
				</span>,
				<span>
					Feel free to check <Link className="lnk blogsListLnk" to="/blogs">Blogs list</Link>.
				</span>,
				<a href="#" className="lnk" onClick={() => onLogout()}>Log out</a>
			]
		}
	</div>
)

export default HomePage;