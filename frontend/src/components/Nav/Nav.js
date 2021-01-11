import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Redux stuff
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

// style stuff
import styled from "styled-components";

function Nav({ sessionUser }) {
	const dispatch = useDispatch();

	//* handle logout button press
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	//? generate links based on user logged in status
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
					<NavLink to="/palettes/create">Create Palette</NavLink>
				</li>
				<li>
					<NavLink to={`/users/${sessionUser.id}`}>
						<FontAwesomeIcon icon={faUser} size="2x" />
					</NavLink>
				</li>
				<li className="logout-li" onClick={handleLogout}>
					Logout
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

//* Styled Components
const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background-color: #1d3557;
	button {
		padding: 2px;
		color: #f1faee;
	}
	a {
		color: #f1faee;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
		flex-direction: row;
		align-items: center;
		.logout-li {
			cursor: pointer;
			color: #f1faee;
			:hover {
				color: red;
				transform: scale(1.2);
			}
		}
	}
	li {
		padding-left: 3rem;
		position: relative;
		text-align: center;
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