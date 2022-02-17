import React from 'react';
import '../sass/Project.sass';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
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

interface CardProps {
	projectScreenShot: string;
	projectName: string;
	projectInfo: string;
	technologiesUsed: string;
	gitHubRepository: string;
	siteUrl?: string;
}

const Project = (props: CardProps) => {
	let calculatorScreenshots = [
		'/projects/calculator/2.webp',
		'/projects/calculator/3.webp',
	];

	let shoppingListScreenShots = [
		'/projects/shoppingList/signup.webp',
		'/projects/shoppingList/login.webp',
		'/projects/shoppingList/dashboard.webp',
		'/projects/shoppingList/searchresults.webp',
		'/projects/shoppingList/my-lists.webp',
	];

	let portfolioPageScreenShots = ['/projects/portfolioPage/portfolio.webp'];

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			className="project"
			sx={{
				maxWidth: 320,
				margin: 3,
				Height: 'auto',
				borderRadius: 3,
				background: '#d2d3ff',
			}}
		>
			<React.Fragment>
				<Zoom>
					<CardMedia
						component="img"
						image={props.projectScreenShot}
						alt="project picture"
					/>
				</Zoom>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.projectName}
					</Typography>
					<Typography
						sx={{ mb: 1.5, fontSize: 16 }}
						variant="body2"
						color="text.primary"
					>
						{props.projectInfo}
					</Typography>
					<Typography
						sx={{ mb: 1.5, fontSize: 16 }}
						variant="body2"
						color="text.primary"
					>
						⚙️ {props.technologiesUsed}
					</Typography>
					<Box component="span" sx={{ display: 'inline' }}>
						💾{' '}
						<a href={props.gitHubRepository}>Github repository</a>
					</Box>

					<a href={props.siteUrl} target="_blank" rel="noreferrer">
						<Button
							href={props.siteUrl}
							component="span"
							variant="contained"
							sx={{
								display: 'block',
								mt: 3,
								textAlign: 'center',
								backgroundColor: '#8185f3',

								'&:hover': {
									backgroundColor: '#a1a3f2',
								},
							}}
						>
							Go to Site
						</Button>
					</a>

					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
						sx={{ left: 120, mt: 1.5 }}
					>
						<Tooltip title="More ScreenShots..">
							<ExpandMoreIcon sx={{ right: 40 }} />
						</Tooltip>
					</ExpandMore>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph>More ScreenShots:</Typography>

							{calculatorScreenshots.map(
								(imgUrl: string, index: number) => {
									return (
										<Zoom key={index}>
											{props.projectName ===
												'Calculator' && (
												<CardMedia
													key={index}
													component="img"
													alt="project picture"
													image={imgUrl}
												/>
											)}
										</Zoom>
									);
								}
							)}

							{shoppingListScreenShots.map(
								(imgUrl: string, index: number) => {
									return (
										<Zoom key={index}>
											{props.projectName ===
												'Shopping-List' && (
												<CardMedia
													key={index}
													component="img"
													alt="project picture"
													image={imgUrl}
												/>
											)}
										</Zoom>
									);
								}
							)}

							{portfolioPageScreenShots.map(
								(imgUrl: string, index: number) => {
									return (
										<Zoom key={index}>
											{props.projectName ===
												'Portfolio-Page' && (
												<CardMedia
													key={index}
													component="img"
													alt="project picture"
													image={imgUrl}
												/>
											)}
										</Zoom>
									);
								}
							)}
						</CardContent>
					</Collapse>
				</CardContent>
			</React.Fragment>
		</Card>
	);
};

export default Project;
