import * as React from 'react';
import { useEffect } from 'react';
import { Box, Button, Grid, Typography, 
	Stack, TextField, Link } from '@mui/material';
import { flexbox } from '@mui/system';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeedIcon from '@mui/icons-material/Feed';

import Resume from './public/Gabriela Shamblin Resume.pdf';

function Contact() {
	useEffect(() => {
		document.title = 'Contact';
	});

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
						<Stack component="form" spacing={2} sx={{pb: 2, maxWidth: '500px', m: 'auto'}}>
							<TextField 
								required
								disabled
								id="name" 
								label="Name"
								variant="standard"/>
							<TextField 
								required
								disabled
								id="email" 
								label="Email Address"
								variant="standard"/>
							<TextField 
								required
								disabled
								id="subject" 
								label="Subject"
								variant="standard"/>
							<TextField 
								required
								disabled
								multiline
								rows={5}
								id="message" 
								label="Message"
								variant="standard"/>

						</Stack>
						<Button disabled style={{backgroundColor: "rgba(51, 155, 158, 0.3)", borderRadius: 50, width: 200}}
						aria-label='github' size='large'>
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
