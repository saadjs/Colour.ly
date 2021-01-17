import styled from "styled-components";
import { motion } from "framer-motion";

export const ColorColumnDiv = styled.div`
	cursor: copy;
	height: 100%;
	width: 20%;
	display: inline-block;
	position: relative;
	:hover .cpy-btn {
		opacity: 1;
	}
	.show.overlay-show {
		opacity: 1;
		position: absolute;
		transform: rotate(1turn);
		z-index: 10;
	}
	.copy.overlay-show {
		opacity: 1;
		transform: scale(2);
		z-index: 10;
		transition-delay: 0.3s;
	}
`;

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 0;
	transition: transform 0.75s ease-in-out;
`;

export const Content = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 1rem;
	padding: 10px;
	text-transform: uppercase;
	text-align: center;
	background-color: blanchedalmond;
	span {
		color: black;
	}
`;

export const CopyButton = styled(motion.button)`
	border: 1px solid black;
	position: absolute;
	display: inline-block;
	width: 8rem;
	height: 4rem;
	top: 50%;
	left: 50%;
	margin-left: -60px;
	margin-top: -15px;
	text-align: center;
	background: rgba(69, 50, 50, 0.3);
	color: white;
	text-transform: uppercase;
	opacity: 0;
`;

export const CopiedText = styled.div`
	opacity: 0;
	position: fixed;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	transform: scale(0.1);
	background-color: red;
	color: whitesmoke;
	h1 {
		text-transform: uppercase;
		background: #0227f7;
		font-family: "Kaushan Script", cursive;
		width: 100%;
		text-align: center;
	}
	p {
		font-size: 2rem;
		text-transform: uppercase;
	}
`;
