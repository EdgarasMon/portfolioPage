import React, { useState } from 'react';
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

const App = () => {
	const defaultDark = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;

	const [theme, setTheme] = useState('light');

	const switchTheme = () => {
		setTheme('dark');
		if (theme == 'dark') {
			setTheme('light');
		}
	};

	return (
		<div className="container">
			<AppBar switchTheme={switchTheme} />

			<div className="homepage" data-theme={theme}>
				<div>
					<div className="homepageText">
						<p>Hi, I'm Edgaras,</p>
						<p>web developer</p>
					</div>
					<img
						alt="Guypicture"
						className="guyPicture"
						src="guy.webp"
					/>
				</div>
				<div>
					<TimeLine />
				</div>

				<div className="topDecoration">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
							className="shape-fill"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
							className="shape-fill"
						></path>
						<path
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
			</div>

			<div className="portfolioTittle" data-theme={theme}>
				<Tooltip title="My projects">
					<h1> 💼 </h1>
				</Tooltip>
			</div>
			<Box className="projects" data-theme={theme}>
				<Card
					projectScreenShot="/projects/calculator/index.webp"
					projectName="Calculator"
					projectInfo="❓ This one-pager was created, by learning purposes. 
					Features are
					calculation of mulltiple numbers with memory board output, integrated music player, responsive and transitioning
					 screen design."
					technologiesUsed="HTML, CSS, JavaScript"
					gitHubRepository="https://github.com/EdgarasMon/calculator"
					siteUrl="https://edgarasmon.github.io/calculator/"
				/>

				<Card
					projectScreenShot="/projects/shoppingList/dashboard.webp"
					projectName="Shopping-List"
					projectInfo="❓ Site is created for taking notes of grocery products. Site is for 
				registered users, but non-registerd users can try it too. Features: Add products from text inputs or search
				products from database and add them too. Then you can save lists to your account and delete them."
					technologiesUsed="HTML, CSS, JavaScript, localStorage, MongoDB, NodeJS"
					gitHubRepository="https://github.com/EdgarasMon/ShoppingList"
				/>

				<Card
					projectScreenShot="/projects/portfolioPage/portfolio.webp"
					projectName="Portfolio-Page"
					projectInfo="❓ Site is created for projects showing purposes. Features: 
					interactive React and Material UI components and design, Contact form for sending email."
					technologiesUsed="React, TypeScript, Material UI, SASS, EmailJS, reCaptcha-V3"
					gitHubRepository="https://github.com/EdgarasMon/portfolioPage"
					siteUrl="http://www.edgarasmonkus.com"
				/>
			</Box>

			<div className="skillsTittle" data-theme={theme}>
				<Tooltip title="technical skills / tools">
					<h1>🖥️ 🔧</h1>
				</Tooltip>
				<div className="skilsAndTools" data-theme={theme}>
					<Paper />
					<div
						className="skilsAndToolsChild"
						data-theme={theme}
					></div>
				</div>
			</div>

			<div className="aboutTittle" data-theme={theme}>
				<Tooltip title="about Me">
					<h1>🤷</h1>
				</Tooltip>
			</div>
			<div className="aboutContainer" data-theme={theme}>
				<div className="about">
					{' '}
					I'm an ambitious, persistant, Web Systems focused developer.
					Also experienced telecommunications engineer with a
					demonstrated history of working in this industry. Skilled in
					network installation, FTTH-GPON ect. Bachelor's degree in IT
					from ŠU University. My motivation is passion for learning
					new technologies and adapting them in projects I create. I
					love to design, make front-end and back-end. I'm seeking an
					entry-level role as a full-stack or front-end developer.
				</div>
			</div>

			<div className="contact" data-theme={theme}>
				<div className="socialMedia">
					<Tooltip title="social media">
						<h1>📲</h1>
					</Tooltip>
					<SocialMedia />
				</div>

				<div className="getInTouchContainer">
					<Tooltip title="contact">
						<h1>📧</h1>
					</Tooltip>

					<p className="getInTouchChild">
						<span>Get In Touch</span>
						<br />
						Dropping a line to say Hi, ask for my resume or see if
						we can build something amazing together? I'd love to
						hear it from you! Fill in your info in the form below
						and I look forward to hearing from you!
					</p>
					<div className="getInTouchForm">
						<Contact />
					</div>
				</div>
				<br />
			</div>

			<div className="footer">
				<div className="bottomDecoration">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
							className="shape-fill"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
							className="shape-fill"
						></path>
						<path
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
			</div>
			<div className="footerText">
				© 2022 | Designed & coded by Edgaras Monkus 👨🏼‍💻
			</div>
		</div>
	);
};

export default App;
