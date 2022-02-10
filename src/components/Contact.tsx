import * as React from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import '../sass/App.sass';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init('user_iLKSGUev9BJGVQHQvEIsw');
const SITE_KEY = '6LdUBWYeAAAAAFujSrcEyZWcs-yRCw8pLGgtRBaK';

export default function ColorTextFields() {
	let window: any;
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const [emailSent, setEmailSent] = useState(false);
	const [emailSendError, setEmailSendError] = useState(false);

	function onFormSubmit(e: any) {
		const emailDetails = {
			Name: name,
			Subject: subject,
			message: message,
			Email: email,
		};
		console.log(emailDetails);
		sendFeedback(emailDetails);
		e.preventDefault();
		window.grecaptcha.ready(function () {
			window.grecaptcha
				.execute(SITE_KEY, { action: 'submit' })
				.then(function (token: any) {
					// Send form value as well as token to the server
				});
		});
	}

	const sendFeedback = (emailDetails: any) => {
		emailjs
			.send('service_winsl0u', 'template_m1xtu63', emailDetails)
			.then((res: any) => {
				console.log('Email successfully sent!');
				setEmailSent(true);
			})
			.catch((err: any) => {
				console.error(
					'Oh well, you failed. Here some thoughts on the error that occured:',
					err
				);
				setEmailSendError(true);
			});
	};

	return (
		<form id="submitForm">
			<Box id="app" component="form" noValidate autoComplete="off">
				<div className="contactForm">
					<TextField
						type="text"
						name="name"
						onChange={e => setName(e.target.value)}
						label="Name"
						required
					/>{' '}
					<br />
					<TextField
						type="text"
						name="Subject"
						onChange={e => setSubject(e.target.value)}
						label="Subject"
						required
					/>{' '}
					<br />
					<TextField
						type="text"
						name="message"
						onChange={e => setMessage(e.target.value)}
						label="Message"
						required
						multiline
						rows={6}
						sx={{
							'& > :not(style)': {
								height: '20ch',
								textAlign: 'left',
							},
						}}
					/>
					<br />
					<TextField
						label="E-mail"
						required
						onChange={e => setEmail(e.target.value)}
					/>{' '}
					<br />
					<Button
						data-action="submit"
						onClick={e => onFormSubmit(e)}
						variant="contained"
						endIcon={<SendIcon />}
						sx={{
							fontSize: 15,
							width: 'auto',
							backgroundColor: '#8185f3',

							'&:hover': {
								backgroundColor: '#a1a3f2',
							},
						}}
					>
						Send
					</Button>
					<Box>
						{emailSent && (
							<Alert
								severity="success"
								onClose={() => {
									setEmailSent(false);
								}}
							>
								Email successfully sent!
							</Alert>
						)}
					</Box>
					<Box>
						{emailSendError && (
							<Alert
								severity="error"
								onClose={() => {
									setEmailSendError(false);
								}}
							>
								Email didn't sent!
							</Alert>
						)}
					</Box>
				</div>
				<Box sx={{ p: 5 }}></Box>
			</Box>
		</form>
	);
}
