import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CopyColor from "./CopyColor";
import styled from "styled-components";

function Palette() {
	const [loaded, setLoaded] = useState(false);
	const [colorPalette, setColorPalette] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/palettes/${id}`);
			const data = response.data;
			setColorPalette(data);
			setLoaded(true);
		})();
	}, [id]);

	if (!loaded) {
		return null;
	}
	const boxes = colorPalette.colors.map((color) => (
		<CopyColor
			key={color.name}
			name={color.name}
			background={color.color}
		/>
	));

	return (
		<StyledDiv className="Palette">
			<div className="color-box">{boxes}</div>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	.color-box {
		height: 90%;
	}
`;

export default Palette;
