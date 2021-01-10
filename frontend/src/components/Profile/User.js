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
				const data = response.data;
				const paletteData = data.palettes;
				setUser(data.user);
				getUserPalettes(paletteData);
			})();
	}, [userId]);

	if (!sessionUser) return <Redirect to="/login" />;

	return (
		<ul>
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
