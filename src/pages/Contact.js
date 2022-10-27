import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography, 
	Stack, TextField, Link } from '@mui/material';
import { flexbox } from '@mui/system';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeedIcon from '@mui/icons-material/Feed';

import Resume from './public/Gabriela Shamblin Resume.pdf';
// import emailjs from '@emailjs/browser';

function Contact() {
	useEffect(() => {
		document.title = 'Contact';
	});

	const [toSend, setToSend] = useState({
		name: '',
		email: '',
		message: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		// emailjs.sendForm('service_gu427bp', 'template_jqizbmj', toSend, '_wu6HQWfsViVJ8OBD')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
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
					backgroundColor: '#edf0f0',
					minHeight: '95vh',
					px: 2, py: 1}}>

					<Typography sx={{fontSize: 40, letterSpacing: 5, p: 10}}>
						Contact Me!
					</Typography>

					<Typography sx={{fontSize: 30, letterSpacing: 5, p: 3}}>
						Gabriela Shamblin
					</Typography>

					<Grid container spacing={2} direction="row" justifyContent="center" sx={{pb: 5}}>
						<Grid item>
							<Link href="mailto:gabyshamblin@gmail.com" 
							target="_blank" rel="noopener">
								<Button style={{backgroundColor: "rgba(51, 155, 158, 0.5)", color: "#000000", borderRadius: 50}}
									aria-label='github' size='large' m='1'>
									<EmailIcon/>
									<Typography sx={{fontSize: 16, p: 1}}>
										Send an email
									</Typography>
								</Button>
							</Link>
						</Grid>

						<Grid item>
							<Link href="https://github.com/GabyShamblin" 
							target="_blank" rel="noopener">
								<Button style={{backgroundColor: "rgba(51, 155, 158, 0.5)", color: "#000000", borderRadius: 50}}
									aria-label='github' size='large' m='1'>
									<GitHubIcon/>
									<Typography sx={{fontSize: 16, p: 1}}>
										See my GitHub
									</Typography>
								</Button>
							</Link>
						</Grid>

						<Grid item>
							<Link href="https://www.linkedin.com/in/gabriela-shamblin-7416611b7/" 
							target="_blank" rel="noopener">
								<Button style={{backgroundColor: "rgba(51, 155, 158, 0.5)", color: "#000000", borderRadius: 50}}
									aria-label='github' size='large'>
									<LinkedInIcon/>
									<Typography sx={{fontSize: 16, p: 1}}>
										See my LinkedIn
									</Typography>
								</Button>
							</Link>
						</Grid>

						<Grid item>
							<a href={Resume} download="Gabriela Shamblin Resume.pdf" target='_blank' rel="noreferrer">
								<Button style={{backgroundColor: "rgba(51, 155, 158, 0.5)", color: "#000000", borderRadius: 50}}
								aria-label='github' size='large'>
									<FeedIcon/>
									<Typography sx={{fontSize: 16, p: 1}}>
										Download my resume
									</Typography>
								</Button>
							</a>
						</Grid>
					</Grid>

					<Box component="form" sx={{display: flexbox, justifyContent: 'center'}}>
						<Stack spacing={2} sx={{pb: 2, maxWidth: '500px', m: 'auto'}}>
							<TextField 
								required
								id="name" 
								name="name"
								label="Name"
								value={toSend.name}
								variant="standard"
								onChange={handleChange}/>
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

						<Button style={{backgroundColor: "rgba(51, 155, 158, 0.3)", 
							color: "#000000", 
							borderRadius: 50, 
							width: 200}}
							aria-label='github' 
							size='large'
						>
							<EmailIcon/>
							<Typography sx={{fontSize: 16, p: 1}}>
								Submit
							</Typography>
						</Button>
					</Box>

				</Box>
			</div>
		</React.Fragment>
  );
}

export default Contact;
