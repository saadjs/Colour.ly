import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClipboard } from "@fortawesome/free-solid-svg-icons";

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

const StyledContainerDiv = styled.div`
	box-shadow: 10px 5px 5px #d0b64d;
	padding: 10px;
	:hover {
		cursor: pointer;
	}
`;

const StyledInnerDiv = styled.div`
	background-color: #32a25f;
	height: 175px;
	width: 100%;
	overflow: hidden;
`;

const StyledH5 = styled.h5`
	color: #000000;
	text-align: center;
	padding: 0.5rem;
	font-size: 1rem;
`;

const Columns = styled.div`
	height: 100%;
	width: 20%;
	display: inline-block;
`;

const PaletteInfoDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LikesContainer = styled.div`
	display: flex;
	padding: 0.5rem;
	box-shadow: 5px 5px 10px 1px rgba(0, 0, 255, 0.2);
	p {
		padding-left: 5px;
		padding-right: 5px;
	}
	.home-dil {
		color: red;
	}
`;

const CreatorInfoDiv = styled.div`
	padding-left: 0.5rem;
	span {
		font-family: cursive;
		color: #575fcf;
		font-size: 1.5rem;
	}
	/* border: 5px solid red; */
`;
export default ColorColumns;
