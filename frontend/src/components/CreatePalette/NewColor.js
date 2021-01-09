import React from "react";
import styled from "styled-components";

function NewColor({ color, name, deleteAddedColor }) {
	return (
		<StyledDiv style={{ backgroundColor: color }}>
			<Content>
				<span>{name}</span>
				<button onClick={deleteAddedColor}>Delete</button>
			</Content>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	height: 100px;
	width: 200px;
	margin: 0 auto;
	display: inline-block;
	position: relative;
	cursor: pointer;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	width: 100%;
	left: 0px;
	bottom: 0px;
	padding: 10px;
	color: black;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-size: 12px;
`;

export default NewColor;
