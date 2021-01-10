import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function User({ sessionUser }) {
	const [userPalettes, getUserPalettes] = useState([]);
	const userId = sessionUser.id;

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/users/${userId}`);
			console.log(response);
		})();
	});

	if (!sessionUser) {
		return <Redirect to="/login" />;
	}

	return (
		<ul>
			<li>
				<strong>User Id</strong> {sessionUser.id}
			</li>
			<li>
				<strong>Username</strong> {sessionUser.username}
			</li>
			<li>
				<strong>Email</strong> {sessionUser.email}
			</li>
		</ul>
	);
}
export default User;
