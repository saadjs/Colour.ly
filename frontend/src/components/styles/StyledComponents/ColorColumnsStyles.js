import styled from "styled-components";

export const StyledContainerDiv = styled.div`
	padding: 10px;
	box-shadow: 0px 0px 5px #ada4b1;
	border-radius: 10px;
	margin: 0.5rem 0;
	:hover {
		cursor: pointer;
	}
	@media (max-width: 1400px) {
		box-shadow: none;
		border: 1px solid black;
	}
`;

export const StyledInnerDiv = styled.div`
	height: 175px;
	width: 100%;
	overflow: hidden;
	border-radius: 10px;
`;

export const StyledH5 = styled.h5`
	text-align: center;
	padding: 0.5rem;
	font-size: 1rem;
`;

export const Columns = styled.div`
	height: 100%;
	width: 20%;
	display: inline-block;
`;

export const PaletteInfoDiv = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 5px;
`;

export const LikesContainer = styled.div`
	display: flex;
	padding: 0.5rem;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	box-shadow: 0px 0px 3px #ada4b1;
	p {
		padding: 0 5px;
	}
	.home-dil {
		color: red;
	}
`;

export const CreatorInfoDiv = styled.div`
	padding-left: 0.5rem;
	span {
		font-family: cursive;
		color: #575fcf;
		font-size: 1.5rem;
	}
`;
