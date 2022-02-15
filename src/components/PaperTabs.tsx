import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function SimplePaper(props: any) {
	return (
		<React.Fragment>
			<div className="technologyLogos">
				<figure>
					<img
						src="/technologies/html.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<img
						src="/technologies/css.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<Tooltip title="CSS with superpowers">
						<img
							src="/technologies/sass.webp"
							width="90"
							height="90"
							alt="technologyLogo"
						/>
					</Tooltip>
				</figure>
				<figure>
					<img
						src="/technologies/javas.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<img
						src="/technologies/typescript.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<img
						src="/technologies/react.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<img
						src="/technologies/python.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<Tooltip title="'MongoDB' is a schema-less NoSQL document database">
						<img
							src="/technologies/mongodb.webp"
							width="90"
							height="90"
							alt="technologyLogo"
						/>
					</Tooltip>
				</figure>
				<figure>
					<Tooltip title="'nodejs' back-end JavaScript runtime environment ">
						<img
							src="/technologies/node.webp"
							width="90"
							height="90"
							alt="technologyLogo"
						/>
					</Tooltip>
				</figure>
				<figure>
					<img
						src="/technologies/mysql.webp"
						width="90"
						height="90"
						alt="technologyLogo"
					/>
				</figure>
				<figure>
					<Tooltip title="responsive Web design">
						<img
							src="/technologies/responsive.webp"
							width="90"
							height="90"
							alt="technologyLogo"
						/>
					</Tooltip>
				</figure>
			</div>

			<div className="toolsLogos">
				<figure>
					<img
						src="/tools/vscode.webp"
						width="90"
						height="90"
						alt="toolsLogo"
					/>
				</figure>
				<Tooltip title="'localstorage' browser storage ">
					<figure>
						<img
							src="/tools/localstorage.webp"
							width="90"
							height="90"
							alt="toolsLogo"
						/>
					</figure>
				</Tooltip>
				<Tooltip title="'emailjs' tool for sending emails from just frontend ">
					<figure>
						<img
							src="/tools/emailjs.webp"
							width="90"
							height="90"
							alt="toolsLogo"
						/>
					</figure>
				</Tooltip>
				<Tooltip title="'reCAPTCHA-v3' Google service from fraud and abuse ">
					<figure>
						<img
							src="/tools/hcapha.webp"
							width="90"
							height="90"
							alt="toolsLogo"
						/>
					</figure>
				</Tooltip>
			</div>
		</React.Fragment>
	);
}
