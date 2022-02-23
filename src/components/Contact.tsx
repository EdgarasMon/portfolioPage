import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import '../sass/App.sass';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

init('user_iLKSGUev9BJGVQHQvEIsw');
const SITE_KEY = '6LdUBWYeAAAAAFujSrcEyZWcs-yRCw8pLGgtRBaK';
const messageSound = new Audio(require('../sounds/message.mp3'));
const warningSound = new Audio(require('../sounds/warning.wav'));

const Contact = () => {
	let window: any;
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const [emailSent, setEmailSent] = useState(false);
	const [emailSendError, setEmailSendError] = useState(false);

	const onFormSubmit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const emailDetails = {
			Name: name,
			Subject: subject,
			message: message,
			Email: email,
		};

		if (
			emailDetails.Name !== '' &&
			emailDetails.Subject !== '' &&
			emailDetails.message !== '' &&
			emailDetails.Email !== ''
		) {
			sendFeedback(emailDetails);
			e.preventDefault();
			window.grecaptcha.ready(() => {
				window.grecaptcha
					.execute(SITE_KEY, { action: 'submit' })
					.then((token: string) => {});
			});
		} else {
			setEmailSendError(true);
			warningSound.volume = 0.4;
			warningSound.play();
		}
	};

	const sendFeedback = (emailDetails: any) => {
		emailjs
			.send('service_winsl0u', 'template_m1xtu63', emailDetails)
			.then(res => {
				console.log('Email successfully sent!');
				setEmailSent(true);
				messageSound.volume = 0.4;
				messageSound.play();
			})
			.catch(err => {
				console.error(
					'Oh well, you failed. Here some thoughts on the error that occured:',
					err
				);
				setEmailSendError(true);
			});
	};

	return (
		<Box id="app" component="form" noValidate autoComplete="off">
			<div className="contactForm" id="contact">
				<TextField
					type="text"
					name="name"
					placeholder="Mr. / Ms. Name"
					onChange={e => setName(e.target.value)}
					label="Name"
					required
				/>{' '}
				<br />
				<TextField
					type="text"
					name="Subject"
					placeholder="About projects / experience"
					onChange={e => setSubject(e.target.value)}
					label="Subject"
					required
				/>{' '}
				<br />
				<TextField
					type="text"
					name="message"
					onChange={e => setMessage(e.target.value)}
					placeholder="Hi, I would like to ask"
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
					type="email"
					placeholder="myEmail@gmail.com"
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
				<Box sx={{ mt: 2 }}>
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
				<Box sx={{ mt: 0 }}>
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
				<Box sx={{ mt: 1 }}>
					{emailSendError && (
						<Alert
							severity="warning"
							onClose={() => {
								setEmailSendError(false);
							}}
						>
							Please fill all fiels Corectly!
						</Alert>
					)}
				</Box>
			</div>
			<Box sx={{ p: 2 }}></Box>
		</Box>
	);
};

export default Contact;
