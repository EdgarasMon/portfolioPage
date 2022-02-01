import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

let logoArr = [
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
		<Box>
			{logoArr.map(imgUrl => (
				<CardMedia
					component="img"
					alt="technology picture"
					image={imgUrl}
				/>
			))}
		</Box>
	);
}
