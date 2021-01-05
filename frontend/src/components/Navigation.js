import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

function Navigation() {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (!sessionUser) {
		sessionLinks = (
			<>
				<NavLink to="/login">Log In</NavLink>
				<NavLink to="/signup">Sign Up</NavLink>
			</>
		);
	} else {
		sessionLinks = <ProfileButton user={sessionUser} />;
	}

	return (
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
				<h1>This is Home</h1>
				{sessionLinks}
			</li>
		</ul>
	);
}

export default Navigation;
