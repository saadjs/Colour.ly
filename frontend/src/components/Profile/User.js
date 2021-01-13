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
	const [userBio, setUserBio] = useState("");
	const [showAbout, setShowAbout] = useState(false);
	const [aboutMe, setAboutMe] = useState("");

	const { userId } = useParams();

	useEffect(() => {
		sessionUser &&
			(async () => {
				const response = await axios.get(`/api/users/${userId}`);
				const data = response.data;
				const paletteData = data.palettes;
				setUser(data.user);
				setUserBio(data.user.aboutMe);
				setAboutMe(data.user.aboutMe);
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
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.put(`/api/users/${userId}/about`, { aboutMe });
		setUserBio(res.data.aboutMe);
		setShowAbout(!showAbout);
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
						{userBio}
					</li>
					{!showAbout && (
						<li>
							{sessionUser.id === parseInt(userId, 10) && (
								<button
									onClick={() => setShowAbout(!showAbout)}
									className="show-about-form-btn"
								>
									Update About me
								</button>
							)}
						</li>
					)}
				</ul>
				{showAbout && (
					<div className="update-bio-form-container">
						<form onSubmit={handleSubmit}>
							<textarea
								required
								type="text"
								value={aboutMe}
								onChange={(e) => setAboutMe(e.target.value)}
							/>
							<br />
							<button
								type="submit"
								className="show-about-form-btn"
							>
								Submit
							</button>
						</form>
					</div>
				)}
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
	.show-about-form-btn {
		padding: 0.5rem;
		width: 200px;
		font-size: 1rem;
		margin-top: 0.5rem;
	}
	.update-bio-form-container {
		textarea {
			width: 300px;
			height: 300px;
		}
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
