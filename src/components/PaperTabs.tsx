import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function SimplePaper(props: any) {
	return (
		<React.Fragment>
			<div className="technologyLogos">
				<figure>
					<img src="/technologies/html.png" width="90" height="90" />
				</figure>
				<figure>
					<img src="/technologies/css.png" width="90" height="90" />
				</figure>
				<figure>
					<Tooltip title="CSS with superpowers">
						<img
							src="/technologies/sass.png"
							width="90"
							height="90"
						/>
					</Tooltip>
				</figure>
				<figure>
					<img src="/technologies/javas.png" width="90" height="90" />
				</figure>
				<figure>
					<img
						src="/technologies/typescript.png"
						width="90"
						height="90"
					/>
				</figure>
				<figure>
					<img src="/technologies/react.png" width="90" height="90" />
				</figure>
				<figure>
					<img
						src="/technologies/python.png"
						width="90"
						height="90"
					/>
				</figure>
				<figure>
					<Tooltip title="'MongoDB' is a schema-less NoSQL document database">
						<img
							src="/technologies/mongodb.png"
							width="90"
							height="90"
						/>
					</Tooltip>
				</figure>
				<figure>
					<Tooltip title="'nodejs' back-end JavaScript runtime environment ">
						<img
							src="/technologies/node.png"
							width="90"
							height="90"
						/>
					</Tooltip>
				</figure>
				<figure>
					<img src="/technologies/mysql.png" width="90" height="90" />
				</figure>
				<figure>
					<Tooltip title="responsive Web design">
						<img
							src="/technologies/responsive.png"
							width="90"
							height="90"
						/>
					</Tooltip>
				</figure>
			</div>

			<div className="toolsLogos">
				<figure>
					<img src="/tools/vscode.png" width="90" height="90" />
				</figure>
				<Tooltip title="'localstorage' browser storage ">
					<figure>
						<img
							src="/tools/localstorage.png"
							width="90"
							height="90"
						/>
					</figure>
				</Tooltip>
				<Tooltip title="'emailjs' tool for sending emails from just frontend ">
					<figure>
						<img src="/tools/emailjs.png" width="90" height="90" />
					</figure>
				</Tooltip>
				<Tooltip title="'reCAPTCHA-v3' Google service from fraud and abuse ">
					<figure>
						<img src="/tools/hcapha.png" width="90" height="90" />
					</figure>
				</Tooltip>
			</div>
		</React.Fragment>
	);
}
