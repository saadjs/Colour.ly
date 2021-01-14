import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "../Home/ColorColumns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import iAmWinking from "./../../styles/images/avatar.jpeg";
import angryPuppy from "./../../styles/images/angryPuppy.jpg";
import excitedMonkey from "./../../styles/images/excitedMonkey.jpg";
import hooterWink from "./../../styles/images/hooterWink.jpg";
import mindBlown from "./../../styles/images/mindBlown.jpg";
import roboHeart from "./../../styles/images/roboHeart.jpg";
import skullWinking from "./../../styles/images/skullWinking.jpg";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim, photoAnim } from "../../styles/Animation";

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

	let avatar;
	const currentUser = user.username;
	if (currentUser === "Demo") {
		avatar = iAmWinking;
	} else if (currentUser === "saad") {
		avatar = skullWinking;
	} else if (currentUser === "bob") {
		avatar = hooterWink;
	} else if (currentUser === "cow") {
		avatar = mindBlown;
	} else if (currentUser === "monkey") {
		avatar = roboHeart;
	} else {
		avatar = excitedMonkey;
	}

	return (
		<MainContainer
		// variants={pageAnimation}
		// initial="hidden"
		// animate="show"
		// exit="exit"
		>
			<UserInfoContainer>
				<ul>
					<li className="avatar-container">
						<motion.img
							src={avatar}
							alt="avatar"
							initial={{ scale: 0 }}
							animate={{ rotate: 360, scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 120,
								damping: 20,
							}}
						/>
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
						<li className="btn-container-li">
							{sessionUser.id === parseInt(userId, 10) && (
								<UpdateBioDiv>
									<button
										onClick={() => setShowAbout(!showAbout)}
										className="show-about-form-btn"
									>
										Update About me
									</button>
								</UpdateBioDiv>
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
			<PaletteContainer
				variants={pageAnimation}
				initial="hidden"
				animate="show"
				exit="exit"
			>
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

const MainContainer = styled(motion.div)`
	width: 90vw;
	margin: auto;
	padding: 0 2rem;
`;
const ColumnsContainerDiv = styled.div`
	flex-grow: 2;
`;
const UserInfoContainer = styled(motion.div)`
	position: absolute;
	left: 0;
	width: 20%;
	box-shadow: 10px 5px 5px #000000;
	flex-direction: column;
	.username-container {
		width: 100%;
		text-align: center;
	}
	.avatar-container {
		width: 100%;
	}
	.show-about-form-btn {
		padding: 0.5rem;

		font-size: 1rem;
		margin-top: 0.5rem;
	}
	.update-bio-form-container {
		form {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		textarea {
			width: 100%;
			height: 300px;
			resize: none;
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
		justify-content: center;
		padding: 1rem;
		width: 100%;
		li {
			font-family: cursive;
			color: #706fd3;
			width: 100%;
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
const PaletteContainer = styled(motion.div)`
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

const UpdateBioDiv = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
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
