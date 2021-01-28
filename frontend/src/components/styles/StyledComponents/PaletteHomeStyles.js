import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
`;

export const Colors = styled.div`
	display: grid;
	grid-template-columns: repeat(4, calc(25% - (180px / 4)));
	grid-gap: 60px;
	width: 100%;
	@media (max-width: 1400px) {
		display: inline;
	}
`;

export const ContainerDiv = styled.div`
	width: 100%;
	padding: 2rem 2rem;
	h1 {
		text-align: center;
		padding: 1rem;
		background-color: white;
		font-family: "Kaushan Script", cursive;
		color: #673ab7;
	}
`;

export const MainOuterDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
