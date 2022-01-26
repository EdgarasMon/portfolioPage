import * as React from 'react';
import ReactDOM from 'react-dom';
import Appbar from './components/Appbar';
import Card from './components/Card';
import './css/App.sass';
import Box from '@mui/material/Box';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';

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
					projectScreenShot="/project/calculator.jpg"
					projectName="Calculator"
					projectInfo="  This one-pager was created, by learning purposes. Functionalities: 
				calculation of mulltiple numbers with memory board output, integrated music player, responsive and transitioning
				 screen desing"
					technologiesUsed="HTML, CSS, JavaScript"
					gitHubRepository="https://github.com/EdgarasMon/calculator"
				/>
				<Card projectName="Shopping-List" projectInfo="" />
				<Card />
				<Card />
			</div>
			<Box sx={{ bgcolor: '#cd9b9b', color: 'white' }}>
				<div id="angleDiv2"></div>
			</Box>
			<Box sx={{ bgcolor: '#f3e88e', color: 'white' }}>
				<h2>Skills & tools</h2>
			</Box>
			<div id="angleDiv3">
				<HtmlRoundedIcon
					sx={{
						width: 128,
						height: 128,
						display: 'inline',
					}}
				/>
				<CssRoundedIcon
					sx={{
						width: 128,
						height: 128,
						display: 'inline',
					}}
				/>
				<JavascriptRoundedIcon
					sx={{
						width: 128,
						height: 128,
						display: 'inline',
					}}
				/>
			</div>
			<Box sx={{ bgcolor: '#e8f1d4', color: 'white' }}>
				<h2>About</h2>
			</Box>
			<div id="angleDiv4">data</div>
			<div id="angleDiv5">
				<h2>Contact</h2>
			</div>
		</div>
	);
}

export default App;
