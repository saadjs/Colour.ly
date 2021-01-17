import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
	StyledDiv,
	Content,
} from "./../styles/StyledComponents/NewColorStyles";

function NewColor({ color, name, deleteAddedColor }) {
	return (
		<StyledDiv style={{ backgroundColor: color }}>
			<Content>
				<span>{name}</span>
				<FontAwesomeIcon
					icon={faTimes}
					size="2x"
					className="trash-icon"
					onClick={deleteAddedColor}
				>
					<span>Delete</span>
				</FontAwesomeIcon>
			</Content>
		</StyledDiv>
	);
}

export default NewColor;
