import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CopyColor from "./CopyColor";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Palette({ setGetNew }) {
	const [loaded, setLoaded] = useState(false);
	const [colorPalette, setColorPalette] = useState([]);
	const [paletteTitle, setPaletteTitle] = useState("");
	const [createdBy, setCreatedBy] = useState("");
	const [totalLikes, setTotalLikes] = useState("");
	const [creatorId, setCreatorId] = useState("");
	const [showComments, setShowComments] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/palettes/${id}`);
			const data = response.data;
			setCreatedBy(data.createdBy);
			setCreatorId(data.userId);
			setColorPalette(data.colors);
			setTotalLikes(data.totalLikes);
			setPaletteTitle(data.paletteTitle);
			setLoaded(true);
		})();
	}, [id]);

	if (!loaded) {
		return null;
	}

	const handleLike = async () => {
		const response = await axios.post(`/api/palettes/${id}/like`);
		setTotalLikes(response.data.totalLikes);
		setGetNew(false);
	};
	const boxes = colorPalette.map((color) => (
		<CopyColor
			key={color.name}
			name={color.name}
			background={color.color}
		/>
	));

	return (
		<StyledDiv className="Palette">
			<div className="color-box">{boxes}</div>
			<div className="created-by">
				<div>
					<h2>{paletteTitle}</h2>
					<p>
						Created By:{" "}
						<Link to={`/users/${creatorId}`}>{createdBy}</Link>
					</p>
				</div>
				<LikeContainer>
					<motion.div whileTap={{ scale: 2, rotate: 90 }}>
						<FontAwesomeIcon
							icon={faHeart}
							size="2x"
							className="dil-like-btn"
							onClick={handleLike}
						/>
					</motion.div>
					<p>{totalLikes}</p>
					<CommentDiv>
						<motion.div
							whileTap={{ scale: 2, rotate: 90 }}
							whileHover={{ scale: 1.5 }}
						>
							<FontAwesomeIcon
								icon={faClipboard}
								size="2x"
								className="comment-icon-btn"
								onClick={() => setShowComments(!showComments)}
							/>
						</motion.div>
						<p>{1}</p>
					</CommentDiv>
				</LikeContainer>
			</div>
			<div>
				{showComments && (
					<CommentContainerDiv>
						<h1>Hi</h1>
					</CommentContainerDiv>
				)}
			</div>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	height: 80vh;
	width: 80vw;
	margin: auto;
	padding: 1rem;
	.color-box {
		height: 100%;
	}
	.created-by {
		display: flex;
		justify-content: space-between;
		align-items: center;
		p {
			font-size: 2rem;
		}
	}
`;

const CommentDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LikeContainer = styled.div`
	display: flex;
	align-items: stretch;
	p {
		padding-left: 1rem;
	}
	.dil-like-btn {
		color: red;
		cursor: pointer;
		:hover {
			transform: scale(1.5);
		}
		::after {
			color: black;
		}
	}
	.comment-icon-btn {
		margin-left: 1rem;
		cursor: pointer;
	}
`;

const CommentContainerDiv = styled.div`
	border: 1px solid black;
	width: 20%;
	margin: auto;
`;

export default Palette;
