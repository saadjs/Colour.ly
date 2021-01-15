import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Redux stuff
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

// style stuff
import styled from "styled-components";
import { motion } from "framer-motion";
import colourly from "./../../styles/images/colourly.jpeg";

function Nav({ sessionUser }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { pathname } = useLocation();

	//* handle logout button press
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
		history.push("/login");
	};

	//? generate links based on user logged in status
	let sessionLinks;
	if (!sessionUser) {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login">Log In</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width: pathname === "/login" ? "45px" : "0%",
						}}
					/>
				</li>
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width: pathname === "/signup" ? "55px" : "0%",
						}}
					/>
				</li>
			</>
		);
	} else {
		sessionLinks = (
			<>
				<li>
					<NavLink exact to="/palettes">
						Explore Palettes
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width: pathname === "/palettes" ? "95px" : "0%",
						}}
					/>
				</li>
				<li>
					<NavLink exact to="/palettes/create">
						Create Palette
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width:
								pathname === "/palettes/create" ? "95px" : "0%",
						}}
					/>
				</li>
				<li>
					<NavLink exact to={`/users/${sessionUser.id}/favorites`}>
						Favorites
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width:
								pathname ===
								`/users/${sessionUser.id}/favorites`
									? "63px"
									: "0%",
						}}
					/>
				</li>
				<li>
					<NavLink to={`/users/${sessionUser.id}`}>
						<FontAwesomeIcon icon={faUser} size="2x" />
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width:
								pathname === `/users/${sessionUser.id}`
									? "30px"
									: "0%",
						}}
					/>
				</li>
				<li className="logout-li" onClick={handleLogout}>
					Logout
				</li>
			</>
		);
	}

	return (
		<StyledNav>
			<NavLink to="/">
				<motion.img
					src={colourly}
					alt=""
					style={{ width: 150 }}
					whileHover={{ scale: 2 }}
					whileTap={{ rotate: -90 }}
				/>
			</NavLink>
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

const ActivePath = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 0;
	position: absolute;
	bottom: -80%;
`;

export default Nav;
