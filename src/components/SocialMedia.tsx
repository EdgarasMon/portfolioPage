import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import '../sass/SocialMedia.sass';

let socialLogos = [
	'/social/linkedin.png',
	'/social/git.png',
	'/social/fb.png',
	'/social/insta.png',
];

let socialLinks = [
	'https://www.linkedin.com/in/edgarasmon/',
	'https://github.com/EdgarasMon/',
	'https://www.facebook.com/edgaras.edga.739/',
	'https://www.instagram.com/edgarasofficial/',
];

export default function SimplePaper(props: any) {
	return (
		<div className="paper">
			<Box className="socialLogos">
				{socialLinks.map(linkUrl => (
					<Link href={linkUrl} target="_blank" rel="noopener">
						{socialLogos.map(imgUrl => (
							<CardMedia
								component="img"
								alt="social logo"
								image={imgUrl}
							/>
						))}
					</Link>
				))}
			</Box>
		</div>
	);
}
