import React, { useState } from "react";
import NewColor from "./NewColor";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { SketchPicker } from "react-color";
import { motion } from "framer-motion";
import { pageAnimation } from "../styles/Animation";
import {
	ColorPickerDiv,
	ButtonDiv,
	ResetColorBtn,
	RandomColorBtn,
	CreatePaletteBtn,
	AddToPaletteBtn,
	Main,
} from "./../styles/StyledComponents/NewPaletteStyles";

function NewPalette({ sessionUser, colorCombos, setGetNew }) {
	const [pickedColor, setPickedColor] = useState("#932BBA");
	const [pickedColorName, setPickedColorName] = useState("");
	const [createdPalette, setCreatedPalette] = useState([]);
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
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
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
					<SketchPicker
						className="chrome-color-picker"
						color={pickedColor}
						onChangeComplete={(color) => setPickedColor(color.hex)}
					/>
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
		</motion.div>
	);
}

export default NewPalette;
