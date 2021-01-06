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
				<li>
					<button onClick={handleLogout}>Log out</button>
				</li>
			</>
		);
	}

	return (
		<StyledNav>
			<h1>
				<NavLink to="/">Home</NavLink>
			</h1>
			<ul>{sessionLinks}</ul>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background-color: #1d3557;

	a {
		color: #f1faee;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	li {
		padding-left: 3rem;
		position: relative;
	}
	@media (max-width: 1300px) {
		flex-direction: column;
		padding: 2rem 1rem;
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
	}
`;

export default Nav;
