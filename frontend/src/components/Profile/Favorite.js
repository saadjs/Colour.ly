import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "./../Home/ColorColumns";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";

function Favorite() {
	const [likedPalettes, setLikedPalettes] = useState([]);

	const { userId } = useParams();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/users/${userId}/favorites`);
			setLikedPalettes(response.data.liked_palettes);
		})();
	}, [userId]);

	return (
		<FvrtPalettes
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{likedPalettes.length > 0 ? (
				likedPalettes.map((palette, i) => (
					<div className="fvrt-plt-container" key={i}>
						<h1>My Favorites</h1>
						<ColorColumns
							colors={palette.colors}
							paletteId={palette.paletteId}
							paletteTitle={palette.paletteTitle}
							totalLikes={palette.totalLikes}
							createdBy={palette.createdBy}
						/>
					</div>
				))
			) : (
				<h2 style={{ textAlign: "center" }}>Such Emptiness!</h2>
			)}
		</FvrtPalettes>
	);
}

const FvrtPalettes = styled(motion.div)`
	padding: 2rem;
	h1 {
		text-align: center;
	}
	.fvrt-plt-container {
		margin-bottom: 1rem;
		padding: 1rem;
		width: 50%;
		margin: auto;
	}
`;

export default Favorite;
