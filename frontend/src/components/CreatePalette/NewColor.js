import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function NewColor({ color, name, deleteAddedColor }) {
	return (
		<StyledDiv style={{ backgroundColor: color }}>
			<Content>
				<span>{name}</span>
				<FontAwesomeIcon
					icon={faTimes}
					size="2x"
					className="trash-icon"
					onClick={deleteAddedColor}
				>
					<span>Delete</span>
				</FontAwesomeIcon>
			</Content>
		</StyledDiv>
	);
}

const StyledDiv = styled(motion.div)`
	height: 100%;
	width: 20%;
	margin: 0 auto;
	display: inline-block;
	position: relative;
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
	.trash-icon {
		cursor: pointer;
		background-color: whitesmoke;
		padding: 5px;
	}
	span {
		color: black;
		background-color: whitesmoke;
		padding: 5px;
	}
`;

export default NewColor;
