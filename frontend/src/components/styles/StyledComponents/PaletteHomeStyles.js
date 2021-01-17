import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
`;

export const Colors = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 22%);
	grid-gap: 4%;
	width: 100%;
	@media (max-width: 1400px) {
		display: inline;
	}
`;

export const ContainerDiv = styled.div`
	width: 100%;
	padding: 2rem 2rem;
	margin-bottom: 2rem;
	h1 {
		text-align: center;
		padding: 1rem;
		border: 2px solid black;
		background-color: #badc58;
	}
`;

export const MainOuterDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
