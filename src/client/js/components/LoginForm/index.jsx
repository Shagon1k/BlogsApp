import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}
	}

	handleInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.username || !this.state.password) return;
		this.props.onLogin({
			username: this.state.username,
			password: this.state.password
		})
	}


	render() {
		return (
			<div className="loginFormContainer">
				{this.props.isLoggedIn ?
					<span className="infoText">
						You are logged in!
					</span> : 
					<form className="loginForm" onSubmit={(e) => this.handleSubmit(e)}>
						<label htmlFor="inputUsername">Username:</label>
						<input name="username" id="inputUsername" type="text" value={this.state.username} onChange={(e) => this.handleInputChange(e)} />
						<label htmlFor="inputPassword">Password:</label>
						<input name="password" id="inputPassword" type="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)} />
						<button className="loginBtn btn">Login</button>
					</form>
				}
				<Link className="lnk" to="/">Home Page</Link>
			</div>
		);
	}
}

export default LoginForm;
