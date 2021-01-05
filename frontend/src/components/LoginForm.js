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

	return (
		<div className="LoginForm">
			<form className="login-form" onSubmit={handleSubmit}>
				{errors &&
					errors.map((error, idx) => (
						<div className="errors" key={idx}>
							<p>{error}</p>
						</div>
					))}
				<div className="input-wrapper">
					<h1 className="form-title">Color.ly</h1>
					<h3 className="form-subheading">Login</h3>
					<label>Email</label>
					<input
						type="text"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label>Password</label>
					<input
						type="password"
						autoComplete="on"
						onChange={(e) => setPassword(e.target.value)}
						required
						id="password-field"
					/>
				</div>
				<button type="submit" className="login-button">
					Login
				</button>
				<p className="cta-p">
					Need an account?{" "}
					<NavLink to="/signup" className="signup-link">
						Sign Up here
					</NavLink>
				</p>
			</form>
		</div>
	);
}

export default LoginFormPage;
