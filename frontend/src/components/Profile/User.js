import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "../Home/ColorColumns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function User({ sessionUser }) {
	const [userPalettes, getUserPalettes] = useState([]);
	const [user, setUser] = useState([]);

	const { userId } = useParams();

	useEffect(() => {
		sessionUser &&
			(async () => {
				const response = await axios.get(`/api/users/${userId}`);
				const data = response.data;
				const paletteData = data.palettes;
				setUser(data.user);
				getUserPalettes(paletteData);
			})();
	}, [userId, sessionUser]);

	if (!sessionUser) return <Redirect to="/login" />;

	const handleDelete = async (id) => {
		const response = await axios.delete(`/api/palettes/${id}`);
	};

	return (
		<MainContainer>
			<ul>
				<li>
					<span>{user.username}</span>
				</li>
				<li>
					<strong>Email:</strong> <span>{user.email}</span>
				</li>
			</ul>
			<PaletteContainer>
				{userPalettes.map((palette) => (
					<div key={palette.paletteId} className="palette-delete-div">
						<ColumnsContainerDiv>
							<ColorColumns
								colors={palette.colors}
								paletteTitle={palette.paletteTitle}
								paletteId={palette.paletteId}
								className="clr-column-cls"
							/>
						</ColumnsContainerDiv>
						{sessionUser.id == user.id ? (
							<DeleteButton>
								<FontAwesomeIcon
									icon={faTrashAlt}
									size="2x"
									onClick={() =>
										handleDelete(palette.paletteId)
									}
								/>
							</DeleteButton>
						) : (
							""
						)}
					</div>
				))}
			</PaletteContainer>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 0 2rem;
	ul {
		list-style-type: none;
		box-shadow: 10px 5px 5px #e12200;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
		width: 50%;
		margin: auto;
		li {
			font-family: cursive;
		}
		span {
			font-size: 1.5rem;
		}
	}
`;
const ColumnsContainerDiv = styled.div`
	/* border: 2px solid blue; */
	flex-grow: 2;
`;

const PaletteContainer = styled.div`
	margin: auto;
	padding: 0 1rem;
	display: grid;
	width: 50%;
	/* border: 4px solid black; */
	.palette-delete-div {
		border: 3px solid pink;
		margin: 3px 0;
		display: flex;
		justify-content: center;
	}
`;

const DeleteButton = styled.button`
	/* border: 2px solid red; */
	/* margin-right: auto; */
`;

export default User;
