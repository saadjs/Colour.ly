import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDiv = styled(motion.div)`
	height: 80vh;
	width: 80vw;
	padding: 1rem;
	.color-box {
		height: 100%;
	}
	.created-by {
		position: absolute;
		box-shadow: -10px 0px 10px black;
		right: 0;
		width: 20%;
		top: 12%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}
	@media (max-width: 1500px) {
		.created-by {
			top: 11%;
			margin-top: 5rem;
		}
	}
	@media only screen and (max-height: 960px) {
		.created-by {
			top: 15%;
			margin-top: 5rem;
		}
	}
`;
export const MainCommentDiv = styled.div`
	box-shadow: -10px 0px 10px #575fcf;
	background-color: #dff9fb;
`;

export const CommentContainerDiv = styled.div`
	width: 100%;
	ul {
	}
	.commentor {
		font-size: 1.5rem;
		color: #40407a;
	}
	.actual-comment {
		all: unset;
		font-family: cursive;
		padding-left: 10px;
	}
	li {
		list-style-type: none;
		margin-top: 5px;
	}
`;

export const CommentDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ShareDiv = styled(motion.div)`
	cursor: pointer;
	padding-left: 1rem;
`;

export const LikeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	.total-likes-count {
		padding-left: 1rem;
		margin: 0;
		font-size: 1.5rem;
	}
	.total-comments-count {
		font-size: 1.5rem;
		margin: 0;
		padding-left: 1rem;
	}
	.dil-like-btn {
		color: red;
		cursor: pointer;
		:hover {
			transform: scale(1.5);
		}
		::after {
			color: black;
		}
	}
	.comment-icon-btn {
		margin-left: 1rem;
		cursor: pointer;
	}
`;

export const MainComment = styled.div`
	.innner-ul-comment {
		padding: 5px;
	}
	form {
		display: flex;
	}
	input {
		width: 100%;
		height: 1rem;
		border: 2px solid black;
	}
	button {
		width: 8rem;
		height: 2.5rem;
	}
`;
export const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffa65;
	z-index: 2;
`;

export const Frame2 = styled(Frame1)`
	background: #ffaf40;
`;

export const Frame3 = styled(Frame1)`
	background: #ff4d4d;
`;

export const Frame4 = styled(Frame1)`
	background: #26de81;
`;
export const Frame5 = styled(Frame1)`
	background: #dfe6e9;
`;
export const Frame6 = styled(Frame1)`
	background: #74b9ff;
`;
