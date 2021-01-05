import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../store/session";
import "./SignupForm.css";

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

	// sign up button submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({ email, username, password })
			).catch((res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			});
		}
		return setErrors([
			"Confirm Password field must be the same as the Password field",
		]);
	};

	return (
		<div className="signup-container">
			<h1 id="signup-heading">Sign Up</h1>
			<div className="signup-error-msg-holder">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
			</div>
			<form id="signup-form" onSubmit={handleSubmit}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required
				/>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
					required
				/>
				<input
					type="password"
					autoComplete="on"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					required
				/>
				<input
					type="password"
					autoComplete="on"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder="Confirm password"
					required
				/>
				<input
					type="submit"
					value="Create Account"
					id="signup-form-submit"
				/>
				<NavLink to="/login" id="back-to-login">
					Already have an account?
				</NavLink>
			</form>
		</div>
	);
}

export default SignupFormPage;
