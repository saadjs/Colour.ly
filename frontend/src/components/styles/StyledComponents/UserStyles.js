import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
	width: 90vw;
	margin: auto;
	padding: 0 2rem;
`;
export const ColumnsContainerDiv = styled.div`
	flex-grow: 2;
`;
export const UserInfoContainer = styled(motion.div)`
	position: absolute;
	left: 0;
	width: 20%;
	border-radius: 10px;
	box-shadow: 10px 5px 30px #4d4d4d;
	flex-direction: column;
	.username-container {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span {
			font-size: 2.5rem;
		}
	}
	.avatar-container {
		width: 100%;
	}
	.show-about-form-btn {
		padding: 0.5rem;

		font-size: 1rem;
		margin-top: 0.5rem;
	}
	.update-bio-form-container {
		form {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		textarea {
			width: 100%;
			height: 300px;
			resize: none;
		}
	}
	strong {
		text-decoration: underline;
		color: black;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 1rem;
		width: 100%;
		li {
			font-family: cursive;
			color: #706fd3;
			width: 100%;
			padding: 10px 0;
			p {
				font-size: 1.75rem;
			}
			img {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				border-radius: 50%;
			}
		}
		span {
			font-size: 1.5rem;
		}
	}
`;
export const PaletteContainer = styled(motion.div)`
	margin: auto;
	padding: 0 1rem;
	display: grid;
	width: 50%;
	.palette-delete-div {
		margin: 3px 0;
		display: flex;
		justify-content: center;
	}
	h1 {
		border-bottom: 2px solid black;
		text-align: center;
	}
`;

export const UpdateBioDiv = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
`;

export const DeleteButton = styled.button`
	outline: none;
	border: none;
	flex-grow: 1;
	:hover {
		box-shadow: 10px 5px 5px #ff0000;
		transform: scale(1.5);
	}
`;

export const UpdateDeleteDiv = styled.div`
	display: flex;
	padding: 1rem;
	flex-direction: column;
`;

export const FollowInfoDiv = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 1400px) {
		flex-direction: column;
	}
`;

export const FollowButton = styled(motion.button)`
	color: white;
	border-radius: 10px;
	font-size: 1rem;
	border: none;
	outline: none;
	background-color: #0095f6;
	width: 7rem;
	height: 3rem;
	:hover {
		background-color: #34ace0;
	}
`;
