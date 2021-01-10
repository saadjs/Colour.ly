import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

function User({ sessionUser }) {
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
