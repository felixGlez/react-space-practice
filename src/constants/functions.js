export const actualBg = path => {
	switch (path) {
		case '/':
			return './assets/home/background-home-desktop.jpg';
		case '/destination':
			return './assets/destination/background-destination-desktop.jpg';
		case '/crew':
			return './assets/crew/background-crew-desktop.jpg';
		case '/technology':
			return './assets/technology/background-technology-desktop.jpg';
	}
};
