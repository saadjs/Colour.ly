import styled from "styled-components";
import { motion } from "framer-motion";

export const MasonryOptions = {
	paddingTop: "1rem",
	fitWidth: true,
	gutter: 10,
	itemSelector: ".photo-item",
};

export const StyledDiv = styled(motion.div)`
	cursor: copy;
	padding: 1rem 0;
	background-color: #ffffff;
	width: 90vw;
	margin: 1rem auto;
	border-radius: 10px;
	-webkit-box-shadow: 0 0 15px 2px #a7a7a7;
	-moz-box-shadow: 0 0 15px 2px #a7a7a7;
	box-shadow: 0 0 15px 2px #a7a7a7;
	.logo-container {
		cursor: initial;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.show.overlay-show {
		opacity: 1;
		z-index: 10;
	}
	.copy.overlay-show {
		opacity: 1;
		transform: scale(1);
		z-index: 10;
		transition-delay: 0.3s;
	}
	.masony-container {
		width: 100%;
		margin: 1rem auto;
	}
`;

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 0;
	transition: transform 0.75s ease-in-out;
`;

export const CopiedText = styled(motion.div)`
	opacity: 0;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 4rem;
	transform: scale(0.1);
	color: white;
	h1 {
		text-transform: uppercase;
		background: #a600bf;
		width: 100%;
		font-size: 10rem;
		text-align: center;
	}
`;

export const EachColor = styled(motion.div)`
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	justify-content: flex-end;
`;
