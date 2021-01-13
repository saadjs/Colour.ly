import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "../Home/ColorColumns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import avatar from "./../../styles/images/avatar.jpeg";

function User({ sessionUser, setGetNew }) {
	const [userPalettes, getUserPalettes] = useState([]);
	const [pageReload, setPageReload] = useState(false);
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
				setPageReload(true);
			})();
	}, [userId, sessionUser, pageReload]);

	if (!sessionUser) return <Redirect to="/login" />;

	const handleDelete = async (id) => {
		await axios.delete(`/api/palettes/${id}`);
		setGetNew(false);
		setPageReload(false);
	};

	return (
		<MainContainer>
			<UserInfoContainer>
				<ul>
					<li className="avatar-container">
						<img src={avatar} alt="avatar" />
					</li>
					<li className="username-container">
						<span>{user.username}</span>
					</li>
					<li>
						<strong>Email:</strong>
						<a href={`mailto:${user.email}`}>
							{" "}
							<span>{user.email}</span>
						</a>
					</li>
					<li>
						<strong>About Me:</strong>
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						<br /> sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
						<br />
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris
						<br />
						nisi ut aliquip ex ea commodo consequat.
					</li>
				</ul>
			</UserInfoContainer>
			<PaletteContainer>
				<h1>My Palettes</h1>
				{userPalettes.map((palette) => (
					<div key={palette.paletteId} className="palette-delete-div">
						<ColumnsContainerDiv>
							<ColorColumns
								{...palette}
								className="clr-column-cls"
							/>
						</ColumnsContainerDiv>
						{sessionUser.id === user.id ? (
							<UpdateDeleteDiv>
								<DeleteButton>
									<FontAwesomeIcon
										icon={faTrashAlt}
										size="2x"
										onClick={() =>
											handleDelete(palette.paletteId)
										}
									/>
								</DeleteButton>
							</UpdateDeleteDiv>
						) : (
							""
						)}
					</div>
				))}
			</PaletteContainer>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 0 2rem;
`;
const ColumnsContainerDiv = styled.div`
	flex-grow: 2;
`;
const UserInfoContainer = styled.div`
	position: absolute;
	top: 10%;
	width: 20%;
	.username-container {
		width: 100%;
		text-align: center;
	}
	.avatar-container {
		width: 100%;
	}
	strong {
		text-decoration: underline;
		color: black;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
		li {
			font-family: cursive;
			color: #706fd3;
			img {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				border-radius: 50%;
			}
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
	.palette-delete-div {
		margin: 3px 0;
		display: flex;
		justify-content: center;
	}
	h1 {
		border-bottom: 2px solid black;
		text-align: center;
	}
`;

const DeleteButton = styled.button`
	outline: none;
	border: none;
	flex-grow: 1;
	:hover {
		box-shadow: 10px 5px 5px #ff0000;
		transform: scale(1.5);
	}
`;

const UpdateDeleteDiv = styled.div`
	display: flex;
	padding: 1rem;
	flex-direction: column;
`;

export default User;
