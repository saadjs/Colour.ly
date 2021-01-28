import styled from "styled-components";

export const StyledContainerDiv = styled.div`
	padding: 10px;
	/* border: 1px solid black; */
	box-shadow: 0px 0px 30px #ada4b1;

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
	color: #000000;
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
`;

export const LikesContainer = styled.div`
	display: flex;
	padding: 0.5rem;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 5px 10px 1px rgba(0, 0, 255, 0.2);
	p {
		padding-left: 5px;
		padding-right: 8px;
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
