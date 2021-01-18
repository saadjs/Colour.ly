import React, { useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
//* redux stuff
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
//? styles and page transitions
import "./LoginForm.css";
import { motion } from "framer-motion";
import { signupContainer } from "../styles/Animation";

function LoginFormPage({ sessionUser }) {
	//* redux dispatch
	const dispatch = useDispatch();
	const history = useHistory();

	//* user input states
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	//! if use had already logged in, redirect to Home
	if (sessionUser) return <Redirect to="/" />;

	//? user login submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ email, password })).catch(
			(res) => {
				if (res.errors) setErrors(res.errors);
			}
		);
	};

	//? Demo login handler
	const handleDemoLogin = () => {
		dispatch(
			sessionActions.login({
				email: "demo@aa.io",
				password: "password",
			})
		);
		history.push("/");
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
						<div className="errors" key={idx}>
							<p>{error}</p>
						</div>
					))}
				<div className="input-wrapper">
					<h1 className="form-title">Colour.ly</h1>
					<h3 className="form-subheading">Login</h3>
					<input
						type="text"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						placeholder="Password"
						autoComplete="on"
						onChange={(e) => setPassword(e.target.value)}
						required
						id="password-field"
					/>
				</div>
				<button type="submit" className="login-button">
					Login
				</button>
				<button onClick={handleDemoLogin} className="demo-button">
					Login as Demo
				</button>
				<p className="p-signup-link">
					Need an account?{" "}
					<NavLink to="/signup" className="signup-link">
						Sign Up here
					</NavLink>
				</p>
			</form>
		</motion.div>
	);
}

export default LoginFormPage;
