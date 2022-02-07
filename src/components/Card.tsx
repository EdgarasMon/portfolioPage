import * as React from 'react';
import '../sass/Project.sass';
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
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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
	let calculatorScreenshotArray = props.calculatorScreenshotArray;
	let shoppingListScreenShotArray = props.shoppingListScreenShotArray;

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			className="project"
			sx={{
				maxWidth: 320,
				margin: 1,
				marginBottom: 5,
				Height: 'auto',
				borderRadius: 3,
				background: '#d2d3ff',
			}}
		>
			<CardActionArea>
				<Zoom>
					<CardMedia
						component="img"
						height="250"
						image={props.projectScreenShot}
						alt="project picture"
					/>
				</Zoom>
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
						💾:{' '}
						<a href={props.gitHubRepository}>Github repository</a>
					</Box>

					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
						sx={{ left: 120 }}
					>
						<Tooltip title="More ScreenShots..">
							<ExpandMoreIcon sx={{ right: 40 }} />
						</Tooltip>
					</ExpandMore>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph>More ScreenShots:</Typography>
							{calculatorScreenshotArray.map((imgUrl: any) => (
								<Zoom>
									<CardMedia
										sx={{ mb: 1 }}
										component="img"
										height="200"
										alt="project picture"
										image={imgUrl}
									/>
								</Zoom>
							))}
						</CardContent>
					</Collapse>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
