import React, { useState } from "react";
import * as sessionActions from "./../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
	// redux dispatch
	const dispatch = useDispatch();

	// session user
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	// if use had already logged in, redirect to home,
	if (sessionUser) return <Redirect to="/" />;

	// user login submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ email, password })).catch(
			(res) => {
				if (res.errors) setErrors(res.errors);
			}
		);
	};

	// demo user login handler
	const demoLoginHandler = (e) => {
		dispatch(
			sessionActions.login({
				email: "demo@aa.io",
				password: "password",
			})
		);
	};

	return (
		<div id="main-holder">
			<h1 id="login-heading">Login</h1>
			<div id="login-error-msg-holder">
				{errors.map((error, idx) => (
					<p key={idx}>{error}</p>
				))}
			</div>
			<form id="login-form" onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setEmail(e.target.value)}
					required
					id="username-field"
					placeholder="Email"
				/>
				<input
					type="password"
					autoComplete="on"
					onChange={(e) => setPassword(e.target.value)}
					required
					id="password-field"
					placeholder="Password"
				/>
				<input type="submit" value="Login" id="login-form-submit" />
				<input
					id="login-form-submit-demo"
					type="button"
					value="Login as Demo"
					onClick={demoLoginHandler}
				/>
			</form>
			<NavLink id="sign-up-link" to="/signup">
				Ohh.. That Didn't work? Claim an account...
			</NavLink>
		</div>
	);
}

export default LoginFormPage;
