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
					<img src="/technologies/sass.png" width="90" height="90" />
				</figure>
				<figure>
					<img src="/technologies/javas.png" width="90" height="90" />
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
					<img
						src="/technologies/mongodb.png"
						width="90"
						height="90"
					/>
				</figure>
				<figure>
					<img src="/technologies/node.png" width="90" height="90" />
				</figure>
				<figure>
					<img src="/technologies/mysql.png" width="90" height="90" />
				</figure>
			</div>
			<div className="toolsLogos">
				<figure>
					<img src="/tools/vscode.png" width="90" height="90" />
				</figure>
				<figure>
					<img src="/tools/localstorage.png" width="90" height="90" />
				</figure>
				<figure>
					<img src="/tools/emailjs.png" width="90" height="90" />
				</figure>
				<figure>
					<img src="/tools/hcapha.png" width="90" height="90" />
				</figure>
			</div>
		</React.Fragment>
	);
}
