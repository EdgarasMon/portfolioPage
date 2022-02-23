import * as React from 'react';
import '../sass/SocialMedia.sass';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => {
	return (
		<React.Fragment>
			<div className="socialLogos">
				<figure>
					<a
						href="https://www.linkedin.com/in/edgarasmon/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedInIcon sx={{ fontSize: 50, color: '#8185f3' }} />
					</a>
				</figure>
				<br />
				<br />
				<figure>
					<a
						href="https://github.com/EdgarasMon/"
						target="_blank"
						rel="noreferrer"
					>
						<GitHubIcon sx={{ fontSize: 50, color: '#8185f3' }} />
					</a>
				</figure>
			</div>
		</React.Fragment>
	);
};

export default SocialMedia;
