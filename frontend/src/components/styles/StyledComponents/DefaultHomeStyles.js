import styled from "styled-components";
import { motion } from "framer-motion";

export const MasonryOptions = {
	fitWidth: false,
	gutter: 10,
	itemSelector: ".photo-item",
};

export const StyledDiv = styled(motion.div)`
	cursor: copy;
	background-color: #fdf5e6;
	.logo-container {
		cursor: initial;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		p {
			color: #0c798e;
			font-size: 2rem;
			font-family: "Kaushan Script", cursive;
			span {
				color: #42309c;
			}
		}
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
		width: 90%;
		margin: 1rem auto;
	}
`;

export const HeyThereh1 = styled.h1`
	color: #42309c;
	text-align: center;
	font-size: 3rem;
	font-family: "Kaushan Script", cursive;
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
	left: auto;
	right: auto;
	border-radius: 10px;
	flex-direction: column;
	justify-content: flex-end;
	p {
		align-self: center;
		background: whitesmoke;
		border-radius: 5px;
		-webkit-box-shadow: 0 0 15px 2px black;
		-moz-box-shadow: 0 0 15px 2px black;
		box-shadow: 0 0 15px 2px black;
		padding: 2px;
		font-size: 14px;
	}
`;
