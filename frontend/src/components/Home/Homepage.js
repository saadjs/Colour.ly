import React from "react";
import ColorColumns from "./ColorColumns";
import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";
import styled from "styled-components";

function Homepage({ colorCombos, popularCombos }) {
	return (
		<MotionDiv
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<MainOuterDiv>
				<ContainerDiv>
					<h1>Recent Palettes</h1>
					<Colors>
						{colorCombos.map((combination) => (
							<ColorColumns
								key={combination.paletteId}
								{...combination}
							/>
						))}
					</Colors>
				</ContainerDiv>
				<ContainerDiv>
					<h1>Popular Palettes</h1>
					<Colors>
						{popularCombos.map((combination) => (
							<ColorColumns
								key={combination.paletteId}
								{...combination}
							/>
						))}
					</Colors>
				</ContainerDiv>
			</MainOuterDiv>
		</MotionDiv>
	);
}

const MotionDiv = styled(motion.div)`
	display: flex;
	justify-content: center;
`;

const Colors = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 22%);
	grid-gap: 4%;
	width: 100%;
`;

const ContainerDiv = styled.div`
	width: 100%;
	padding: 2rem 2rem;
	margin-bottom: 2rem;
	h1 {
		text-align: center;
		padding: 1rem;
		border: 2px solid black;
		background-color: #badc58;
		/* color: whitesmoke; */
	}
`;

const MainOuterDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export default Homepage;
