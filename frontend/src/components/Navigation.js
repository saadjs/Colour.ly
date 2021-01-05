import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

function Navigation() {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<NavLink to="/login">Log In</NavLink>
				<NavLink to="/signup">Sign Up</NavLink>
			</>
		);
	}

	return (
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
				{sessionUser && sessionLinks}
			</li>
		</ul>
	);
}

export default Navigation;
