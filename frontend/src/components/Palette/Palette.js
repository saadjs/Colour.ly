import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CopyColor from "./CopyColor";
import styled from "styled-components";

function Palette() {
	const [loaded, setLoaded] = useState(false);
	const [colorPalette, setColorPalette] = useState([]);
	const [createdBy, setCreatedBy] = useState("");
	const [creatorId, setCreatorId] = useState("");

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/palettes/${id}`);
			const data = response.data;
			console.log(data);
			setCreatedBy(data.createdBy);
			setCreatorId(data.userId);
			setColorPalette(data);
			setLoaded(true);
		})();
	}, [id]);

	if (!loaded) {
		return null;
	}
	const boxes = colorPalette.colors.map((color) => (
		<CopyColor
			key={color.name}
			name={color.name}
			background={color.color}
		/>
	));

	return (
		<StyledDiv className="Palette">
			<div className="color-box">{boxes}</div>
			<div className="created-by">
				<p>
					Created By:{" "}
					<Link to={`/users/${creatorId}`}>{createdBy}</Link>
				</p>
			</div>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	height: 80vh;
	width: 80vw;
	margin: auto;
	padding: 1rem;
	.color-box {
		height: 100%;
	}
	.created-by {
		padding: 1rem 0;
		p {
			font-size: 2rem;
		}
	}
`;

export default Palette;
