import React from "react";
import { NavLink } from "react-router-dom";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../store/session";

// style stuff
import styled from "styled-components";
import { motion } from "framer-motion";

function Nav() {
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	let sessionLinks;
	if (!sessionUser) {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login">Log In</NavLink>
				</li>
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
				</li>
			</>
		);
	} else {
		sessionLinks = (
			<>
				<button onClick={handleLogout}>Log out</button>
			</>
		);
	}

	return (
		<div>
			<h1>
				<NavLink to="/">Home</NavLink>
			</h1>
			<ul>{sessionLinks}</ul>
		</div>
	);
}

export default Nav;
