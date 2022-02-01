import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { TableRows } from '@mui/icons-material';
import { grid } from '@mui/system';

let technologyLogos = [
	'/technologies/html.png',
	'/technologies/css.png',
	'/technologies/css.png',
	'/technologies/sass.png',
	'/technologies/javas.png',
	'/technologies/javas.png',
	'/technologies/react.png',
	'/technologies/python.png',
	'/technologies/mongodb.png',
	'/technologies/node.png',
	'/technologies/mysql.png',
];

export default function SimplePaper(props: any) {
	return (
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
	);
}
