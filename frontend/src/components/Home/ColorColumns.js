import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

function ColorColumns({ paletteTitle, colors, paletteId }) {
	const history = useHistory();

	const handleClick = () => {
		history.push(`/palettes/${paletteId}`);
	};
	const verticalColorColumns = colors.map((color, idx) => (
		<Columns key={idx} style={{ backgroundColor: color.color }}></Columns>
	));
	return (
		<StyledContainerDiv onClick={handleClick}>
			<StyledInnerDiv>{verticalColorColumns}</StyledInnerDiv>
			<StyledH5>{paletteTitle}</StyledH5>
		</StyledContainerDiv>
	);
}

const StyledContainerDiv = styled.div`
	/* box-shadow: 10px 5px 5px #d0b64d; */
	padding: 10px;
	:hover {
		cursor: pointer;
	}
`;

const StyledInnerDiv = styled.div`
	background-color: #32a25f;
	height: 175px;
	width: 100%;
	overflow: hidden;
`;

const StyledH5 = styled.h5`
	color: #000000;
	text-align: center;
	padding: 0.5rem;
	font-size: 1rem;
`;

const Columns = styled.div`
	height: 100%;
	width: 20%;
	display: inline-block;
`;

export default ColorColumns;
