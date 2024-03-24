import { v4 } from 'uuid';

export const DESTINATION_INFO = {
	title: '01 PICK YOUR DESTINATION',
	images: [
		'./assets/destination/image-moon.webp',
		'./assets/destination/image-mars.webp',
		'./assets/destination/image-europa.webp',
		'./assets/destination/image-titan.webp'
	],
	name: ['MOON', 'MARS', 'EUROPA', 'TITAN'],
	text: [
		'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
	],
	stats: [
		[
			{ id: v4(), title: 'AVG. DISTANCE', stat: '384,400 KM' },
			{ id: v4(), title: 'EST. TRAVEL TIME', stat: '3 DAYS' }
		],
		[
			{ id: v4(), title: 'AVG. DISTANCE', stat: '225 MIL. KM' },
			{ id: v4(), title: 'EST. TRAVEL TIME', stat: '9 MONTHS' }
		],
		[
			{ id: v4(), title: 'AVG. DISTANCE', stat: '628 MIL. KM' },
			{ id: v4(), title: 'EST. TRAVEL TIME', stat: '3 YEARS' }
		],
		[
			{ id: v4(), title: 'AVG. DISTANCE', stat: '1.6 BIL. KM' },
			{ id: v4(), title: 'EST. TRAVEL TIME', stat: '7 YEARS' }
		]
	]
};
