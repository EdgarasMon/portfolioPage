import * as React from 'react';
import '../sass/SocialMedia.sass';

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
						<img
							src="/social/linkedin.webp"
							width="70"
							height="70"
							alt="linkedInnLogo"
						/>
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
						<img
							src="/social/git.webp"
							width="70"
							height="70"
							alt="gitHubLogo"
						/>
					</a>
				</figure>
			</div>
		</React.Fragment>
	);
};

export default SocialMedia;
