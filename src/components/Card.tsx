import * as React from 'react';
import '../sass/Card.sass';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { positions } from '@mui/system';
import { Screenshot } from '@mui/icons-material';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function ActionAreaCard(props: any) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			id="card"
			sx={{
				maxWidth: 300,
				margin: 1,
				marginBottom: 5,
				maxHeight: 'auto',
			}}
		>
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
					<Typography
						sx={{ mb: 1.5 }}
						variant="body2"
						color="text.primary"
					>
						{props.projectInfo}
					</Typography>
					<Typography
						sx={{ mb: 1.5 }}
						variant="body2"
						color="text.primary"
					>
						⚙️: {props.technologiesUsed}
					</Typography>
					<Box component="span" sx={{ display: 'inline' }}>
						💾: <a href={props.gitHubRepository}>Repository</a>
					</Box>

					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
						sx={{ left: 140 }}
					>
						<Tooltip title="More ScreenShots..">
							<ExpandMoreIcon sx={{ right: 40 }} />
						</Tooltip>
					</ExpandMore>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph>
								More ScreenShots:{' '}
							</Typography>
							{/* {props.calculatorScreenshotArray.map(
								(calculatorScreenshotArray: any) => {
									<CardMedia
										component="img"
										height="200"
										alt="project picture"
										image={calculatorScreenshotArray}
									/>;
								}
							)} */}
							<CardMedia
								component="img"
								height="200"
								alt="project picture"
								image={props.calculatorScreenshotArray}
							/>
							;
						</CardContent>
					</Collapse>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
