import * as React from 'react';
import ReactDOM from 'react-dom';
import Appbar from './components/Appbar';
import Card from './components/Card';
import './css/App.css';
import Box from '@mui/material/Box';
// import CrimsonProRegular from '/fonts/CrimsonPro-Regular.ttf';

function App() {
	return (
		<div id="body">
			<Appbar />
			<div id="angleDiv">
				<div id="angleText">
					<h1>Hi, I'm Edgaras,</h1>
					<h2>web developer</h2>
				</div>
			</div>
			<Box sx={{ bgcolor: '#cd9b9b', color: 'white' }}>
				<h2>My Portfolio</h2>
			</Box>
			<div id="angleDiv2">
				<Card
					projectName="Calculator"
					projectInfo="  This one pager was created, by learning purposes. Functionalities: 
				calculation of mulltiple numbers with memory board output, integrated music player, responsive and transitioning
				 screen desing"
					technologiesUsed="HTML, CSS, JavaScript"
					gitHubRepository="https://github.com/EdgarasMon/calculator"
				/>
				<Card projectName="Shopping-List" projectInfo="" />
				<Card />
				<Card />
			</div>
			<div id="angleDiv3">
				<h2>Skills & tools</h2>
			</div>
			<div id="angleDiv4">
				<h2>About</h2>
			</div>
			<div id="angleDiv5">
				<h2>Contact</h2>
			</div>
		</div>
	);
}

export default App;
