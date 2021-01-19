import React from "react";
import ColorColumns from "./ColorColumns";
import { pageAnimation } from "./../styles/Animation";
import {
	MotionDiv,
	Colors,
	ContainerDiv,
	MainOuterDiv,
} from "./../styles/StyledComponents/PaletteHomeStyles";

function PaletteHome({ colorCombos, popularCombos }) {
	return (
		<MotionDiv
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<MainOuterDiv>
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
			</MainOuterDiv>
		</MotionDiv>
	);
}

export default PaletteHome;
