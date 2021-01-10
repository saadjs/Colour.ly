import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "../Home/ColorColumns";
import styled from "styled-components";

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
		<MainContainer>
			<ul>
				<li>
					<span>{user.username}</span>
				</li>
				<li>
					<strong>Email:</strong> <span>{user.email}</span>
				</li>
			</ul>
			<PaletteContainer>
				{userPalettes.map((palette) => (
					<ColorColumns
						colors={palette.colors}
						paletteTitle={palette.paletteTitle}
						paletteId={palette.paletteId}
					/>
				))}
			</PaletteContainer>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 0 2rem;
	border: 3px solid black;
	ul {
		list-style-type: none;
		box-shadow: 10px 5px 5px #e12200;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
		width: 50%;
		margin: auto;
		li {
			font-family: cursive;
		}
		span {
			font-size: 1.5rem;
		}
	}
`;

const PaletteContainer = styled.div`
	margin: auto;
	padding: 0 1rem;
	display: grid;
	width: 50%;
`;

export default User;
