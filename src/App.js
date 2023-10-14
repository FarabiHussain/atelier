import './App.css';

import TopBar from './components/top.bar';
import Grid from './components/grid';
import img01 from './assets/01.jpg'
import img02 from './assets/02.jpg'
import img03 from './assets/03.jpg'
import img04 from './assets/04.jpg'

export default function App() {
	return (
		<div className='app-page'>
			<header>
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"></link>
				<TopBar title="Atelier" />
			</header>

			<body className='app-page'>
				<Grid list={
					[
						{title: "card01", subtitle: "01.jpg", img: img01},
						{title: "card02", subtitle: "02.jpg", img: img02},
						{title: "card03", subtitle: "03.jpg", img: img03},
						{title: "card04", subtitle: "04.jpg", img: img04},
					]
				} />
			</body>
		</div>
	);
}
