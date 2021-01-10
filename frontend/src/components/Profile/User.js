import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

function User({ sessionUser }) {
	const [userPalettes, getUserPalettes] = useState([]);
	const [user, setUser] = useState([]);

	const { userId } = useParams();

	useEffect(() => {
		sessionUser &&
			(async () => {
				const response = await axios.get(`/api/users/${userId}`);
				console.log(response);
				const data = response.data;
				setUser(data.user);
				getUserPalettes(data);
			})();
	}, [userId]);

	if (!sessionUser) {
		return <Redirect to="/login" />;
	}

	return (
		<ul>
			<li>
				<strong>User Id</strong> {user.id}
			</li>
			<li>
				<strong>Username</strong> {user.username}
			</li>
			<li>
				<strong>Email</strong> {user.email}
			</li>
		</ul>
	);
}
export default User;
