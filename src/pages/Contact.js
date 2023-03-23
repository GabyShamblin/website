import * as React from 'react';
import { useEffect, useState } from 'react';
import VizSensor from 'react-visibility-sensor';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Grow, IconButton, Hidden, Typography, 
	Stack, TextField, Link } from '@mui/material';
import { flexbox } from '@mui/system';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import emailjs from '@emailjs/browser';

const CustomBox = styled(Box)(() => ({
  maxWidth: 800,
	backgroundColor: "#73bed9", 
	color: 'black',
	m: 'auto', mb: 1,
	fontSize: 20,
	borderRadius: 8,
}));

const CustomButton = styled(Button)(() => ({
  minWidth: 150,
	backgroundColor: "#3067a7", 
	color: 'white',
	borderColor: "#000000", 
	borderRadius: 50,
	fontSize: 18,
	'&:hover': {
		backgroundColor: "rgba(194, 194, 194)", 
		borderColor: "#000000", 
		color: 'black',
	}
}));

const CustomIconButton = styled(IconButton)(() => ({
	color: "#a3aab4", 
	borderRadius: 50,
	'&:hover': {
		color: "white", 
	}
}));

function Contact() {
	useEffect(() => {
		document.title = 'Contact';
	});

	const [showBox1, setShowBox1] = useState(false);
	const [toSend, setToSend] = useState({
		name: '',
		email: '',
		message: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(toSend);

		emailjs.send('service_gu427bp', 'template_jqizbmj', toSend, '_wu6HQWfsViVJ8OBD')
      .then((result) => {
				console.log("Email result: " + result.text);
				alert("Message sent");
      }, (error) => {
				console.log("EMAIL SEND ERROR");
				console.log(error.text);
				alert("Message failed to send\n" + error.text)
      });
	};
	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

  return (
		<React.Fragment>
			<div className="App">
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					p: 1}}>

					<Hidden smDown>
						<Typography sx={{fontSize: 40, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							/* Contact Me! */
						</Typography>
					</Hidden>
					<Hidden smUp>
						<Typography sx={{fontSize: 26, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							/* Contact Me! */
						</Typography>
					</Hidden>

					<Grid container spacing={2} direction="row" justifyContent="center" sx={{pb: 5}}>
						<Grid item>
							<Link href="https://github.com/GabyShamblin" 
							target="_blank" rel="noopener">
								<CustomIconButton aria-label='Github'>
									<GitHubIcon fontSize='large'/>
								</CustomIconButton>
							</Link>
						</Grid>

						<Grid item>
							<Link href="https://www.linkedin.com/in/gabriela-shamblin-7416611b7/" 
							target="_blank" rel="noopener">
								<CustomIconButton aria-label='LinkedIn'>
									<LinkedInIcon fontSize='large'/>
								</CustomIconButton>
							</Link>
						</Grid>

						<Grid item>
							<Link href="mailto:gabyshamblin@gmail.com" 
							target="_blank" rel="noopener">
								<CustomIconButton aria-label='Email'>
									<EmailIcon fontSize='large'/>
								</CustomIconButton>
							</Link>
						</Grid>
					</Grid>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox1(true);
					}} >
					<Grow in={showBox1}>
					<CustomBox component='form' sx={{display: flexbox, justifyContent: 'center', m:'auto', p:1}}>
						<Stack spacing={2} sx={{pb: 2, maxWidth: '500px', m: 'auto'}}>
							<TextField 
								required
								id="name" 
								name="name"
								label="Name"
								value={toSend.name}
								variant="standard"
								onChange={handleChange}
								sx={{input: {color: 'white'}}}/>
							<TextField 
								required
								id="email" 
								name="email"
								label="Email Address"
								value={toSend.email}
								variant="standard"
								onChange={handleChange}/>
							<TextField 
								required
								multiline
								rows={5}
								id="message" 
								name="message"
								label="Message"
								value={toSend.message}
								variant="standard"
								onChange={handleChange}/>
								<div class="g-recaptcha" data-sitekey="your_site_key"></div>
						</Stack>

						<CustomButton 
							aria-label='github' 
							size='large'
							type='submit'
							onClick={onSubmit}
						>
							<EmailIcon/>
							<Typography sx={{fontSize: 16, p: 1}}>
								Send a message
							</Typography>
						</CustomButton>
					</CustomBox>
					</Grow>
					</VizSensor>

				</Box>
			</div>
		</React.Fragment>
  );
}

export default Contact;
