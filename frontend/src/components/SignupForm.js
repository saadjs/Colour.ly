import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../store/session";

function SignupFormPage() {
	// redux
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	// all the states for user login and errors
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	// if user has logged in, redirect to Home
	if (sessionUser) return <Redirect to="/" />;

	// sign up button submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({ email, username, password })
			).catch((res) => {
				if (res.errors) setErrors(res.errors);
			});
		}
		return setErrors([
			"Confirm Password field must be the same as the Password field",
		]);
	};

	return (
		<div className="LoginForm">
			<form className="login-form" onSubmit={handleSubmit}>
				{errors.map((error, idx) => (
					<div key={idx} className="errors">
						<p>{error}</p>
					</div>
				))}

				<div className="input-wrapper">
					<h1 className="form-title">Color.ly</h1>
					<h3 className="form-subheading">Sign Up</h3>
					<label>Email</label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label>Username</label>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label>Password</label>
					<input
						type="password"
						autoComplete="on"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label>Confirm Password</label>
					<input
						type="password"
						autoComplete="on"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="login-button">
					Sign Up
				</button>
				<p className="p-signup-link">
					Have an account?{" "}
					<NavLink to="/login" className="signup-link">
						Sign in
					</NavLink>
				</p>
			</form>
		</div>
	);
}
export default SignupFormPage;
