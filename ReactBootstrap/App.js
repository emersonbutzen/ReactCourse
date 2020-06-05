import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render() {
		return(
			<div className="root-container">
				<div className="box-container">
					<div className="controller">
						Login
					</div>
					<div className="controller">
						Register
					</div>
				</div>
			</div>
		);
	}
}

class LoginBox extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};
	}
	
	submitLogin(e) {
		
	}
	
	render() {
		return(
			<div className="inner-container">
				<div className="box-header">
					Login
				</div>
				<div className="box">
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" className="login-input" placeholder="Username" />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="text" name="password" className="login-input" placeholder="Password" />
					</div>
					
					<button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
				</div>
			</div>
		);
	}
}

class RegisterBox extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};
	}
	
	submitRegister(e) {
		
	}
	
	render() {
		return(
			<div className="inner-container">
				<div className="box-header">
					Register
				</div>
				<div className="box">
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" className="login-input" placeholder="Username" />
					</div>
					<div className="input-group">
						<label htmlFor="email">e-mail</label>
						<input type="text" name="email" className="login-input" placeholder="email" />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="text" name="password" className="login-input" placeholder="Password" />
					</div>
					
					<button type="button" className="register-btn" onClick={this.submitRegister.bind(this)}>Register</button>
				</div>
			</div>
		);
	}
}

export default App;