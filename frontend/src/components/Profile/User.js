import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import ColorColumns from "../Home/ColorColumns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function User({ sessionUser, setGetNew }) {
	const [userPalettes, getUserPalettes] = useState([]);
	const [pageReload, setPageReload] = useState(false);
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
				setPageReload(true);
			})();
	}, [userId, sessionUser, pageReload]);

	if (!sessionUser) return <Redirect to="/login" />;

	const handleDelete = async (id) => {
		await axios.delete(`/api/palettes/${id}`);
		setGetNew(false);
		setPageReload(false);
	};
	const handleUpdate = (id) => {
		console.log("update", id);
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
						{sessionUser.id === user.id ? (
							<UpdateDeleteDiv>
								<UpdateButton>
									<FontAwesomeIcon
										icon={faPaintBrush}
										size="2x"
										onClick={() =>
											handleUpdate(palette.paletteId)
										}
									/>
								</UpdateButton>
								<DeleteButton>
									<FontAwesomeIcon
										icon={faTrashAlt}
										size="2x"
										onClick={() =>
											handleDelete(palette.paletteId)
										}
									/>
								</DeleteButton>
							</UpdateDeleteDiv>
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
		box-shadow: 10px 5px 5px #e88a79;
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
	flex-grow: 2;
`;

const PaletteContainer = styled.div`
	margin: auto;
	padding: 0 1rem;
	display: grid;
	width: 50%;
	.palette-delete-div {
		margin: 3px 0;
		display: flex;
		justify-content: center;
	}
`;

const DeleteButton = styled.button`
	outline: none;
	border: none;
	flex-grow: 1;
	:hover {
		box-shadow: 10px 5px 5px #ff0000;
		transform: scale(1.5);
	}
`;

const UpdateButton = styled.button`
	outline: none;
	border: none;
	:hover {
		box-shadow: 10px -5px 5px #00e5ff;
		transform: scale(1.5);
	}

	flex-grow: 1;
`;

const UpdateDeleteDiv = styled.div`
	display: flex;
	padding: 1rem;
	flex-direction: column;
`;

export default User;
