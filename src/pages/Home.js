import * as React from 'react';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import './App.css';

import me from './public/picture.jpg';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1200,
	backgroundColor: "rgba(51, 155, 158, 0.5)", 
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

function Home() {
	useEffect(() => {
		document.title = 'Home';
	});

  return (
		<React.Fragment>
			<div className="App">
				<Box sx={{
						display: flexbox,
						justifyContent: 'center',
						backgroundColor: '#edf0f0',
						minHeight: '100vh',
						px: 2, py: 1}}>

					<Typography sx={{fontSize: 40, letterSpacing: 5, p: 10, pb: 1}}>
							Gabriela Shamblin
					</Typography>

					<Typography sx={{fontSize: 24, letterSpacing: 2, p: 10, pt: 0}}>
							Student and Programmer
					</Typography>

					<Box item sx={{mb: 10}}>
						<img 
							id="me"
							src={me} 
							alt="A white/hispanic woman in a white button up shirt and suit jacket sitting in front of a dark background">
						</img>
					</Box>

					<CustomBox id="project1" sx={{
						maxWidth: 1200,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 5, p: 1}}>

						<Typography sx={{fontSize: 25}}>
							About
						</Typography>

						<Box>
							<Typography sx={{fontSize: 20}}>
								I began programming in 2018 as a curious high school student. Today I'm attending the University of Central Florida for Computer Science and work part-time maintaining websites. I expect to graduate with my Bachelors in Fall 2023 and begin my Masters in Computer Science soon after.
							</Typography>
						</Box>
					</CustomBox>

					<CustomBox id="project1" sx={{
						maxWidth: 1200,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 2, p: 1}}>

						<Typography sx={{fontSize: 25}}>
							What's New
						</Typography>

						<Box>
							<Typography sx={{fontSize: 20}}>
								I'm participating in research and volunteering at one of the virtual reality labs here at UCF.
							</Typography>
						</Box>

					</CustomBox>
				
				</Box>
			</div>
		</React.Fragment>
  );
}

export default Home;
