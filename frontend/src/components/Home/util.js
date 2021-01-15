function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const colors = [];

for (var i = 0; i < 150; i++) {
	colors[i] = {
		color: getRandomColor(),
		heigth: `${Math.random() * 600 + 50}px`,
		width: "300px",
	};
}

export default colors;
