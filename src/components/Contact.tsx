import * as React from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init('user_iLKSGUev9BJGVQHQvEIsw');

export default function ColorTextFields() {
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const [emailSent, setEmailSent] = useState(false);
	const [emailSendError, setEmailSendError] = useState(false);

	const submitValue = () => {
		const emailDetails = {
			Name: name,
			Subject: subject,
			message: message,
			Email: email,
		};
		console.log(emailDetails);
		sendFeedback(emailDetails);
	};

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

	console.log('emailSent ', emailSent);
	console.log('emailSendError ', emailSendError);

	return (
		<form>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '55ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					type="text"
					name="name"
					onChange={e => setName(e.target.value)}
					label="Name"
				/>{' '}
				<br />
				<TextField
					type="text"
					name="Subject"
					onChange={e => setSubject(e.target.value)}
					label="Subject"
				/>{' '}
				<br />
				<TextField
					type="text"
					name="message"
					onChange={e => setMessage(e.target.value)}
					label="Message"
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
					onChange={e => setEmail(e.target.value)}
				/>{' '}
				<br />
				<Button
					onClick={submitValue}
					variant="contained"
					endIcon={<SendIcon />}
					sx={{
						fontSize: 15,
						width: 'auto',
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
				<Box sx={{ p: 3 }}></Box>
			</Box>
		</form>
	);
}
