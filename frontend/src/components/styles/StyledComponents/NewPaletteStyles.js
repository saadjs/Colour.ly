import styled from "styled-components";

export const ColorPickerDiv = styled.div`
	position: absolute;
	left: 0;
	width: 400px;
	box-shadow: 10px 10px 50px #d5abab;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-family: "Kaushan Script", cursive;
	h1 {
		padding: 1rem;
		text-align: center;
	}
	input {
		border: 1px solid black;
	}
	.chrome-color-picker {
		width: 90% !important;
		margin: 0 auto;
	}
	.palettename-input {
		width: 20rem;
		text-align: center;
	}
	.addcolorname-input {
		text-align: center;
		width: 10rem;
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
`;

export const ResetColorBtn = styled.button`
	color: white;
	background-color: red;
	height: 3rem;
	width: 15rem;
	:hover {
		background: red;
		color: black;
	}
`;
export const RandomColorBtn = styled.button`
	color: blue;
	height: 3rem;
	width: 15rem;
`;

export const CreatePaletteBtn = styled.button`
	width: 20rem;
	height: 3rem;
	font-size: 2rem;
	margin-bottom: 10px;
	background: #5f9aed;
`;

export const AddToPaletteBtn = styled.button`
	padding: 0.5rem;
	font-size: 1.4rem;
	background: #b8e986;
`;

export const Main = styled.div`
	position: relative;
	flex-grow: 1;
	height: 87vh;
	padding: 1rem;
	margin-left: 400px;
	.drawer-header {
		height: 100%;
	}
	@media (max-width: 1500px) {
		height: 80vh;
	}
`;
