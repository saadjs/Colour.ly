import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClipboard } from "@fortawesome/free-solid-svg-icons";
import {
	StyledContainerDiv,
	StyledInnerDiv,
	StyledH5,
	Columns,
	PaletteInfoDiv,
	LikesContainer,
	CreatorInfoDiv,
} from "./../styles/StyledComponents/ColorColumnsStyles";

function ColorColumns({
	paletteTitle,
	colors,
	paletteId,
	totalLikes,
	comments,
	createdBy,
}) {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/palettes/${paletteId}`);
	};
	const verticalColorColumns = colors.map((color, idx) => (
		<Columns key={idx} style={{ backgroundColor: color.color }}></Columns>
	));
	return (
		<StyledContainerDiv onClick={handleClick}>
			<StyledInnerDiv>{verticalColorColumns}</StyledInnerDiv>
			<PaletteInfoDiv>
				<StyledH5>{paletteTitle}</StyledH5>
				<LikesContainer>
					<FontAwesomeIcon icon={faHeart} className="home-dil" />
					<p>{totalLikes}</p>
					{comments && (
						<>
							<FontAwesomeIcon icon={faClipboard} />
							<p>{comments.length}</p>
						</>
					)}
				</LikesContainer>
			</PaletteInfoDiv>
			<CreatorInfoDiv>
				Created By: <span>{createdBy}</span>
			</CreatorInfoDiv>
		</StyledContainerDiv>
	);
}
export default ColorColumns;
