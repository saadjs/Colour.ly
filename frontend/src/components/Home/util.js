function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const colors = [];

for (var i = 0; i < 200; i++) {
	colors[i] = {
		color: getRandomColor(),
		heigth: `${Math.random() * 300 + 40}px`,
	};
}

export default colors;
