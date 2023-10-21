import './App.css';

// components
import Grid from './components/grid';

// images from assets folder
import hercules_prototype from './assets/hercules_prototype.webp';
import kyubi_myers from './assets/kyubi_myers.webp';
import liberty_yorinobu from './assets/liberty_yorinobu.webp';
import malorian from './assets/malorian.webp';
import nekomata_default from './assets/nekomata_default.webp';

export default function App() {
	return (
		<div className='app-container'>
			<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"></link>

			{/* animated 'noise' background */}
			<div className="noise"></div>

			{/* grid component, list of dicts as parameter */}
			<Grid list={
				[
					{ title: "Hercules Prototype", class: "Smart Assault Rifle", img: hercules_prototype },
					{ title: "Hawk (Myers' Kyubi)", class: "Power Assault Rifle", img: kyubi_myers },
					{},
					{ title: "Kongou (Yorinobu's Liberty)", class: "Power Pistol", img: liberty_yorinobu },
					{ title: "Silverhand's Malorian", class: "Power Pistol", img: malorian },
					{},
					{ title: "Nekomata", class: "Tech Sniper Rifle", img: nekomata_default },
					{},
					{},
				]
			} />
		</div>
	);
}
