import React, { useState } from "react";
import NewColor from "./NewColor";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { ChromePicker } from "react-color";
import styled from "styled-components";

function NewPalette({ sessionUser, colorCombos, setGetNew }) {
	const [pickedColor, setPickedColor] = useState("#57AEB0");
	const [pickedColorName, setPickedColorName] = useState("");
	const [createdPalette, setCreatedPalette] = useState([
		{ color: "red", name: "red" },
		{ color: "blue", name: "blue" },
	]);
	const [paletteTitle, setPaletteTitle] = useState("");

	const history = useHistory();
	if (!sessionUser) return <Redirect to="/login" />;

	const isPaletteFull = 4 < createdPalette.length;

	const addColorsToPalette = (e) => {
		e.preventDefault();
		const newColor = { color: pickedColor, name: pickedColorName };
		setCreatedPalette([...createdPalette, newColor]);
		setPickedColorName("");
	};

	const randomColorPopper = () => {
		const existingColors = colorCombos.map((c) => c.colors).flat();

		const randomIdx = Math.floor(Math.random() * existingColors.length);
		const randomColor = existingColors[randomIdx];
		setCreatedPalette([...createdPalette, randomColor]);
	};

	const deleteAddedColor = (name) => {
		setCreatedPalette(
			createdPalette.filter((color) => color.name !== name)
		);
	};

	const handleSave = async (e) => {
		e.preventDefault();
		const title = paletteTitle;
		const colors = createdPalette;
		const createdBy = sessionUser.username;

		const response = await axios.post(`/api/palettes`, {
			title,
			colors,
			createdBy,
		});
		const brandNewPalette = response.data;
		const brandNewPaletteId = brandNewPalette.paletteId;
		setGetNew(false);
		history.push(`/palettes/${brandNewPaletteId}`);
	};

	return (
		<div>
			<ColorPickerDiv>
				<div>
					<h1>Create Palette</h1>
					<ButtonDiv>
						<RandomColorBtn
							onClick={randomColorPopper}
							disabled={isPaletteFull}
						>
							{isPaletteFull
								? "Max Colours reached!"
								: "Random Colour"}
						</RandomColorBtn>
					</ButtonDiv>
					<ButtonDiv>
						<ResetColorBtn onClick={() => setCreatedPalette([])}>
							Reset Colours
						</ResetColorBtn>
					</ButtonDiv>
				</div>
				<div className="chrome-color-picker">
					<ChromePicker
						className="chrome-color-picker"
						color={pickedColor}
						onChangeComplete={(color) => setPickedColor(color.hex)}
					/>
					{/* <SwatchesPicker
						className="chrome-color-picker"
						color={pickedColor}
						onChangeComplete={(color) => setPickedColor(color.hex)}
					/> */}
				</div>
				<div>
					<form onSubmit={addColorsToPalette}>
						<div>
							<input
								type="text"
								disabled={isPaletteFull}
								placeholder="Colour Name"
								className="addcolorname-input"
								required
								value={pickedColorName}
								onChange={(e) =>
									setPickedColorName(e.target.value)
								}
							/>
						</div>
						<ButtonDiv>
							<AddToPaletteBtn
								type="submit"
								disabled={isPaletteFull}
							>
								{isPaletteFull
									? "Palette Full!"
									: "Add to Palette"}
							</AddToPaletteBtn>
						</ButtonDiv>
					</form>
				</div>
				<div>
					<form onSubmit={handleSave}>
						<div>
							<input
								type="text"
								className="palettename-input"
								required
								value={paletteTitle}
								placeholder="Palette Name"
								onChange={(e) =>
									setPaletteTitle(e.target.value)
								}
							/>
						</div>
						<ButtonDiv>
							<CreatePaletteBtn
								type="submit"
								disabled={!isPaletteFull}
							>
								{isPaletteFull
									? "Create Palette"
									: "Please Pick 5 colours"}
							</CreatePaletteBtn>
						</ButtonDiv>
					</form>
				</div>
			</ColorPickerDiv>
			<Main>
				{createdPalette.map((color, idx) => (
					<NewColor
						key={idx}
						color={color.color}
						name={color.name}
						deleteAddedColor={() => deleteAddedColor(color.name)}
					/>
				))}
			</Main>
		</div>
	);
}

const ColorPickerDiv = styled.div`
	position: absolute;
	top: 10%;
	bottom: 20%;
	height: 90vh;
	/* padding: 1rem; */
	width: 400px;
	/* left: 0; */
	bottom: 1rem;
	box-shadow: 10px 10px 50px black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
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

const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	/* margin: 4px; */
	/* padding: 4px; */
`;

const ResetColorBtn = styled.button`
	color: red;
	height: 3rem;
	padding: 1rem;
	width: 15rem;
	:hover {
		background: red;
		color: black;
	}
`;
const RandomColorBtn = styled.button`
	color: blue;
	height: 3rem;
	padding: 1rem;
	width: 15rem;
`;

const CreatePaletteBtn = styled.button`
	width: 20rem;
	height: 5rem;
	font-size: 2rem;
	margin-bottom: 10px;
	background: #5f9aed;
`;

const AddToPaletteBtn = styled.button`
	padding: 0.5rem;
	font-size: 1.4rem;
	background: pink;
`;

const Main = styled.div`
	position: relative;
	flex-grow: 1;
	height: 90vh;
	padding: 1rem;
	margin-left: 400px;
	.drawer-header {
		height: 100%;
	}
`;

export default NewPalette;
