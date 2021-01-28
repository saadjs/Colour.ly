import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "../Home/ColorColumns";
import UploadImage from "./UploadImage";
import Toggle from "./../styles/Toggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { pageAnimation } from "../styles/Animation";
import {
	MainContainer,
	ColumnsContainerDiv,
	UserInfoContainer,
	PaletteContainer,
	UpdateBioDiv,
	DeleteButton,
	UpdateDeleteDiv,
	FollowButton,
	FollowInfoDiv,
} from "./../styles/StyledComponents/UserStyles";

function User({ sessionUser, setGetNew, theme, themeToggler }) {
	const [userPalettes, getUserPalettes] = useState([]);
	const [pageReload, setPageReload] = useState(false);
	const [user, setUser] = useState([]);
	const [userBio, setUserBio] = useState("");
	const [showAbout, setShowAbout] = useState(false);
	const [aboutMe, setAboutMe] = useState("");
	const [followers, setFollowers] = useState([]);
	const [totalFollowers, setTotalFollowers] = useState(null);
	const [following, setFollowing] = useState([]);
	const [totalFollowing, setTotalFollowing] = useState(null);
	const [followersShow, setFollowersShow] = useState(false);
	const [followingShow, setFollowingShow] = useState(false);
	const [showUpload, setShowUpload] = useState(false);

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
				setTotalFollowers(data.user.totalFollowers);
				setTotalFollowing(data.user.totalFollowing);
				setFollowers(data.user.followers);
				setFollowing(data.user.following);
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

	const followHandler = async (e) => {
		e.preventDefault();
		const response = await axios.post(`/api/users/${userId}/follow`);
		if (!response.errors) {
			const data = response.data;
			setTotalFollowers(data.totalFollowers);
			setFollowers(data.followers);
			setPageReload(false);
		}
	};

	let showFollowButton;
	let editProfilePic;
	let result =
		followers && followers.some((user) => user.id === sessionUser.id);
	if (result) {
		showFollowButton = (
			<FollowButton onClick={followHandler} whileHover={{ scale: 1.5 }}>
				Unfollow
			</FollowButton>
		);
	} else {
		showFollowButton = (
			<FollowButton onClick={followHandler} whileHover={{ scale: 1.5 }}>
				Follow
			</FollowButton>
		);
	}
	let toggleTheme;
	if (sessionUser.id === parseInt(userId, 10)) {
		showFollowButton = "";
		editProfilePic = (
			<Button
				variant="outline-secondary"
				size="sm"
				onClick={() => setShowUpload(!showUpload)}
			>
				Edit Profile Picture
			</Button>
		);
		toggleTheme = <Toggle theme={theme} toggleTheme={themeToggler} />;
	}

	return (
		<MainContainer>
			{toggleTheme}
			<UserInfoContainer>
				<ul>
					<li className="avatar-container">
						<motion.img
							src={user.dpURL}
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
					<li style={{ textAlign: "center" }}>
						{editProfilePic}
						<UploadImage
							showUpload={showUpload}
							setShowUpload={setShowUpload}
							userId={userId}
							setPageReload={setPageReload}
						/>
					</li>
					<li className="username-container">
						<span>{user.username}</span>
						{showFollowButton}
					</li>
					<FollowInfoDiv>
						<Button
							variant="outline-info"
							onClick={() => setFollowersShow(true)}
						>
							<span>{totalFollowers} </span>Followers
						</Button>

						<Button
							variant="outline-info"
							onClick={() => setFollowingShow(true)}
						>
							<span>{totalFollowing}</span> Following
						</Button>
					</FollowInfoDiv>
					<>
						<Modal
							size="lg"
							show={followersShow}
							animation={false}
							onHide={() => setFollowersShow(false)}
							aria-labelledby="example-modal-sizes-title-lg"
						>
							<Modal.Header closeButton>
								<Modal.Title id="example-modal-sizes-title-lg">
									Followers
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								{followers.length > 0 ? (
									followers.map((follower) => (
										<div key={follower.id}>
											<Link to={`/users/${follower.id}`}>
												<h2>{follower.username}</h2>
											</Link>
											<p>{follower.email}</p>
											<p>{follower.aboutMe}</p>
										</div>
									))
								) : (
									<h1>...</h1>
								)}
							</Modal.Body>
						</Modal>
					</>
					<>
						<Modal
							size="lg"
							animation={false}
							show={followingShow}
							onHide={() => setFollowingShow(false)}
							aria-labelledby="example-modal-sizes-title-lg"
						>
							<Modal.Header closeButton>
								<Modal.Title id="example-modal-sizes-title-lg">
									Following
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								{following.length > 0 ? (
									following.map((user) => (
										<div key={user.id}>
											<Link to={`/users/${user.id}`}>
												<h2>{user.username}</h2>
											</Link>
											<p>{user.email}</p>
											<p>{user.aboutMe}</p>
										</div>
									))
								) : (
									<h1>...</h1>
								)}
							</Modal.Body>
						</Modal>
					</>
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
						<p>{userBio}</p>
					</li>
					{!showAbout && (
						<li className="btn-container-li">
							{sessionUser.id === parseInt(userId, 10) && (
								<UpdateBioDiv>
									<Button
										variant="outline-secondary"
										size="sm"
										onClick={() => setShowAbout(!showAbout)}
									>
										Update About me
									</Button>
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
				{userPalettes.length > 0 ? (
					userPalettes.map((palette) => (
						<div
							key={palette.paletteId}
							className="palette-delete-div"
						>
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
					))
				) : (
					<h2 style={{ textAlign: "center" }}>Such Emptiness!</h2>
				)}
			</PaletteContainer>
		</MainContainer>
	);
}
export default User;
