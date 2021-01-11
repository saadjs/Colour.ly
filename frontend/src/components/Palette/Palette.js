import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CopyColor from "./CopyColor";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Palette() {
	const [loaded, setLoaded] = useState(false);
	const [colorPalette, setColorPalette] = useState([]);
	const [createdBy, setCreatedBy] = useState("");
	const [totalLikes, setTotalLikes] = useState("");
	const [creatorId, setCreatorId] = useState("");

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/palettes/${id}`);
			const data = response.data;
			console.log(data);
			setCreatedBy(data.createdBy);
			setCreatorId(data.userId);
			setColorPalette(data.colors);
			setTotalLikes(data.totalLikes);
			setLoaded(true);
		})();
	}, [id]);

	if (!loaded) {
		return null;
	}

	const handleLike = async () => {
		const response = await axios.post(`/api/palettes/${id}/like`);
		// console.log(response.data);
		// setTotalLikes(response.totalLikes);
		const likeData = await axios.get(`/api/palettes/${id}`);
		setTotalLikes(likeData.data.totalLikes);
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
				<p>
					Created By:{" "}
					<Link to={`/users/${creatorId}`}>{createdBy}</Link>
				</p>
				<LikeContainer>
					<motion.div
						whileTap={{ scale: 2, rotate: 90 }}
						// whileHover={{ rotate: 360 }}
					>
						<FontAwesomeIcon
							icon={faHeart}
							size="2x"
							className="dil-like-btn"
							onClick={handleLike}
						/>
					</motion.div>
					<p>{totalLikes}</p>
				</LikeContainer>
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
		padding: 1rem 0;
		p {
			font-size: 2rem;
		}
	}
`;

const LikeContainer = styled.div`
	display: flex;
	align-items: stretch;
	p {
		padding-left: 1rem;
	}
	.dil-like-btn {
		color: red;
		:hover {
			transform: scale(1.5);
		}
		::after {
			color: black;
		}
	}
`;

export default Palette;
