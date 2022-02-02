import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

let technologyLogos = [
	'/technologies/html.png',
	'/technologies/css.png',
	'/technologies/sass.png',
	'/technologies/javas.png',
	'/technologies/react.png',
	'/technologies/python.png',
	'/technologies/mongodb.png',
	'/technologies/node.png',
	'/technologies/mysql.png',
];

let toolsLogos = [
	'/tools/vscode.png',
	'/tools/localstorage.png',
	'/tools/emailjs.png',
];

export default function SimplePaper(props: any) {
	return (
		<div className="paper">
			<Box className="technologyLogos">
				{technologyLogos.map(imgUrl => (
					<CardMedia
						component="img"
						alt="technology picture"
						image={imgUrl}
						className="trial2"
					/>
				))}
			</Box>
			<Box className="toolsLogos">
				{toolsLogos.map(imgUrl => (
					<CardMedia
						component="img"
						alt="tool picture"
						image={imgUrl}
						className="trial3"
					/>
				))}
			</Box>
		</div>
	);
}
