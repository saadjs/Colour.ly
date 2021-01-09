import React from "react";
import ColorColumns from "./ColorColumns";
import { motion } from "framer-motion";
import { pageAnimation } from "../styles/Animation";
import styled from "styled-components";

function Homepage({ colorCombos }) {
	return (
		<MotionDiv
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
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
	width: 70%;
`;

export default Homepage;
