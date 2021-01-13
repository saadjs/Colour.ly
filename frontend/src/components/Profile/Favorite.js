import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "./../Home/ColorColumns";
import styled from "styled-components";

function Favorite() {
	const [likedPalettes, setLikedPalettes] = useState([]);

	const { userId } = useParams();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/users/${userId}/favorites`);
			console.log(response.data);
			setLikedPalettes(response.data.liked_palettes);
		})();
	}, [userId]);

	return (
		<FvrtPalettes>
			<h1>My Favorites</h1>
			{likedPalettes &&
				likedPalettes.map((palette) => (
					<div className="fvrt-plt-container">
						<ColorColumns
							colors={palette.colors}
							paletteId={palette.paletteId}
							paletteTitle={palette.paletteTitle}
							totalLikes={palette.totalLikes}
						/>
					</div>
				))}
		</FvrtPalettes>
	);
}

const FvrtPalettes = styled.div`
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
