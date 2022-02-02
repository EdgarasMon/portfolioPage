import * as React from 'react';
import AppBar from './components/AppBar';
import Card from './components/Card';
import Paper from './components/PaperTabs';
import Contact from './components/Contact';
import TimeLine from './components/TimeLine';
import SocialMedia from './components/SocialMedia';
import './sass/App.sass';
import './sass/Card.sass';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

let calculatorScreenshotArray = [
	'/projects/calculator/2.jpg',
	'/projects/calculator/3.jpg',
];

let shoppingListScreenShotArray = [
	'/projects/shoppingList/signup.jpg',
	'/projects/shoppingList/login.jpg',
	'/projects/shoppingList/dashboard.jpg',
	'/projects/shoppingList/searchresults.jpg',
	'/projects/shoppingList/my-lists.jpg',
];

function App() {
	return (
		<div className="container">
			<AppBar />
			<div className="angleDiv">
				<Box
					component="div"
					sx={{
						display: 'inline',
						p: 1,
						m: 1,
					}}
				>
					<div className="angleText">
						<p>Hi, I'm Edgaras,</p>
						<p>web developer</p>
						<img className="guyPicture" src="guy.png" />
					</div>
				</Box>
				<Box
					component="div"
					sx={{
						display: 'inline',
						p: 10,
						m: 1,
					}}
				>
					<TimeLine />
				</Box>
			</div>

			<Box sx={{ bgcolor: '#cd9b9b' }}>
				<Tooltip title="My portfolio">
					<h1> 💼 </h1>
				</Tooltip>
			</Box>
			<Box className="angleDiv2">
				<Card
					projectScreenShot="/projects/calculator/index.jpg"
					projectName="Calculator"
					projectInfo="  This one-pager was created, by learning purposes. Functionalities: 
				calculation of mulltiple numbers with memory board output, integrated music player, responsive and transitioning
				 screen desing"
					technologiesUsed="HTML, CSS, JavaScript"
					gitHubRepository="https://github.com/EdgarasMon/calculator"
					calculatorScreenshotArray={calculatorScreenshotArray}
				/>

				{/* <Card
					projectScreenShot="/projects/shoppingList/dashboard.jpg"
					projectName="Shopping-List"
					projectInfo="Site is created for taking notes for grocery lists. Site is for 
				registered users, but non-registerd users can try it too Functionalities: Add products from text inputs or search
				products from database and add them too. Then you can save lists to your account and delete them"
					technologiesUsed="HTML, CSS, JavaScript, localStorage, MongoDB, NodeJS"
					gitHubRepository="https://github.com/EdgarasMon/ShoppingList"
				/>

				<Card
					projectScreenShot="/projects/shoppingList/dashboard.jpg"
					projectName="Portfolio-Page"
					projectInfo="Site is created for projects showing purposes. Functionalities: 
					interactive React and Material UI components and design, Contact form for sending email"
					technologiesUsed="React, TypeScript, Material UI, SASS  EmailJS "
					gitHubRepository="https://github.com/EdgarasMon/portfolioPage"
				/> */}
			</Box>
			<Box sx={{ bgcolor: '#cd9b9b' }}>
				<div className="angleDiv2"></div>
			</Box>
			<Box sx={{ bgcolor: '#f3e88e' }}>
				<Tooltip title="skills / tools">
					<h1>🖥️ / 🔧</h1>
				</Tooltip>
			</Box>
			<div className="angleDiv3">
				<Paper />
			</div>
			<Box sx={{ bgcolor: '#e8f1d4' }}>
				<Tooltip title="about">
					<h1>🤷</h1>
				</Tooltip>
			</Box>
			<div className="angleDiv4">data</div>
			<div className="angleDiv5">
				<Tooltip title="social media">
					<Box
						component="div"
						sx={{
							display: 'inline',
							p: 1,
							m: 1,
						}}
					>
						<h1>📲</h1>
						<br />
						<SocialMedia />
					</Box>
				</Tooltip>
				<Tooltip title="contact">
					<Box
						component="div"
						sx={{
							display: 'inline',
							p: 1,
							m: 1,
						}}
					>
						<h1>📧</h1>
						<h3>Get In Touch</h3>
						<p>
							Dropping a line to say Hi, ask for my resume or see
							if we can build <br /> something amazing together?
							I'd love to hear it from you! <br /> Fill in your
							info in the form below and I look forward to hearing
							<br /> from you!
						</p>
						<br />
						<Contact />
					</Box>
				</Tooltip>
			</div>
			<div className="angleDiv6">
				© 2022 | Designed & coded by Edgaras Monkus 👨🏼‍💻
			</div>
		</div>
	);
}

export default App;
