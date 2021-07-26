export const getRandomColor = () => {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		if (i % 2 !== 0) {
			color += letters[Math.floor(Math.random() * 16)];
		} else {
			color += letters[Math.floor(Math.random() * 7) + 6]; //softer colors
		}
	}
	return color;
}