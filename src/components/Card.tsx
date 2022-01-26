import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function ActionAreaCard(props: any) {
	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={props.projectScreenShot}
					alt="project picture"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.projectName}
					</Typography>
					<Typography variant="body2" color="text.primary">
						{props.projectInfo}
					</Typography>
					<Typography variant="body2" color="text.primary">
						Technologies: {props.technologiesUsed}
					</Typography>
					<Box component="span" sx={{ display: 'inline' }}>
						Project Source:{' '}
						<a href={props.gitHubRepository}>Link</a>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
