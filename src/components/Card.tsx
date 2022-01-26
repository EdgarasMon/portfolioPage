import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function ActionAreaCard(props: any) {
	return (
		<Card sx={{ maxWidth: 250 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="./img/project/calculator.jpg"
					alt="project picture"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.projectName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.projectInfo}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Technologies: {props.technologiesUsed}
					</Typography>
					<Box component="span" sx={{ display: 'inline' }}>
						<Typography variant="body2" color="text.secondary">
							{' '}
							Project SRC:
						</Typography>
					</Box>
					<Box component="span" sx={{ display: 'inline' }}>
						<a href={props.gitHubRepository}>Link</a>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
