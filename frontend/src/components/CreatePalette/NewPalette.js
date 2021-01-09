import React, { useState } from "react";
import NewColor from "./NewColor";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { ChromePicker } from "react-color";

function NewPalette({ sessionUser, colorCombos }) {
	const [pickedColor, setPickedColor] = useState("#57AEB0");
	const [pickedColorName, setPickedColorName] = useState("");
	const [createdPalette, setCreatedPalette] = useState([]);
	const [paletteTitle, setPaletteTitle] = useState("");

	const history = useHistory();
	if (!sessionUser) return <Redirect to="/login" />;

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
		console.log(brandNewPaletteId);
		console.log(brandNewPalette);
		history.push(`/palettes/${brandNewPaletteId}`);
	};

	return (
		<div>
			<div>
				<h1>Create Palette</h1>
				<button onClick={() => setCreatedPalette([])}>
					Reset Colours
				</button>
				<button onClick={randomColorPopper}>Random Colour</button>
			</div>
			<div>
				<ChromePicker
					color={pickedColor}
					onChangeComplete={(color) => setPickedColor(color.hex)}
				/>
			</div>
			<div>
				<form onSubmit={addColorsToPalette}>
					<input
						type="text"
						placeholder="Colour Name"
						required
						value={pickedColorName}
						onChange={(e) => setPickedColorName(e.target.value)}
					/>
					<button type="submit">Add to Palette</button>
				</form>
			</div>
			<div>
				<form onSubmit={handleSave}>
					<input
						type="text"
						required
						value={paletteTitle}
						onChange={(e) => setPaletteTitle(e.target.value)}
					/>
					<button type="submit">Create Palette</button>
				</form>
			</div>
			<div>
				{createdPalette.map((color, idx) => (
					<NewColor
						key={idx}
						color={color.color}
						name={color.name}
						deleteAddedColor={() => deleteAddedColor(color.name)}
					/>
				))}
			</div>
		</div>
	);
}

export default NewPalette;
