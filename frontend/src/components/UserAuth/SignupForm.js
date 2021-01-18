import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
//* redux stuff
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
//? page transition stuff
import { motion } from "framer-motion";
import { signupContainer } from "../styles/Animation";

function SignupFormPage({ sessionUser }) {
	//* redux
	const dispatch = useDispatch();

	//? all the states for user login and errors
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	//! if user has logged in, redirect to Home
	if (sessionUser) return <Redirect to="/" />;

	//* sign up button submit handler
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
		<motion.div
			className="LoginForm"
			variants={signupContainer}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<form className="login-form" onSubmit={handleSubmit}>
				{errors &&
					errors.map((error, idx) => (
						<div key={idx} className="errors">
							<p>{error}</p>
						</div>
					))}

				<div className="input-wrapper">
					<h1 className="form-title">Colour.ly</h1>
					<h3 className="form-subheading">Sign Up</h3>
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="text"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Password"
						autoComplete="on"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Confirm Password"
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
			<div className="catch-phrase">
				<p>The best colour in the world is your favorite one!!!</p>
				<p>
					Let's find that..... <span>Shall We?</span>
				</p>
			</div>
		</motion.div>
	);
}
export default SignupFormPage;
