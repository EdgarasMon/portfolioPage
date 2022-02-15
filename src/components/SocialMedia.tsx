import * as React from 'react';
import ReactDOM from 'react-dom';
import '../sass/SocialMedia.sass';

export default function SimplePaper() {
	return (
		<React.Fragment>
			<div className="socialLogos">
				<figure>
					<a
						href="https://www.linkedin.com/in/edgarasmon/"
						target="_blank"
					>
						<img
							src="/social/linkedin.webp"
							width="70"
							height="70"
						/>
					</a>
				</figure>
				<figure>
					<a href="https://github.com/EdgarasMon/" target="_blank">
						<img src="/social/git.webp" width="70" height="70" />
					</a>
				</figure>
				<figure>
					<a
						href="https://www.facebook.com/edgaras.edga.739/"
						target="_blank"
					>
						<img src="/social/fb.webp" width="70" height="70" />
					</a>
				</figure>
			</div>
		</React.Fragment>
	);
}
