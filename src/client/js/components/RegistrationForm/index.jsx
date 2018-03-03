import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			password2: ''
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
		if (!this.state.username || !this.state.password || !this.state.password2) return;
		this.props.onRegister({
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		})
	}

	render() {
		return (
			<div className="registrationFormContainer">
				{this.props.isLoggedIn ? 
					<span className="infoText">
						You are logged in!
					</span> : 
					<form className="registrationForm" onSubmit={(e) => this.handleSubmit(e)}>
						<label htmlFor="inputUsername">Username:</label>
						<input name="username" id="inputUsername" type="text" value={this.state.username} onChange={(e) => this.handleInputChange(e)} />
						<label htmlFor="inputEmail">Email:</label>
						<input name="email" id="inputEmail" type="text" value={this.state.email} onChange={(e) => this.handleInputChange(e)} />
						<label htmlFor="inputPassword">Password:</label>
						<input name="password" id="inputPassword" type="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)} />
						<label htmlFor="inputPassword2">Confirm password:</label>
						<input name="password2" id="inputPassword2" type="password" value={this.state.password2} onChange={(e) => this.handleInputChange(e)} />
						<button type="submit" className="registerBtn btn">Register</button>
					</form>
				}
				<Link className="lnk" to="/">Home Page</Link>
			</div>
		);
	}
}

export default RegistrationForm;
