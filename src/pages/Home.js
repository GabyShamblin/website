import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import './App.css';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1200,
	backgroundColor: "rgba(51, 155, 158, 0.5)", 
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

function Home() {
  return (
		<React.Fragment>
			<div className="App">
				<Box sx={{
						display: flexbox,
						justifyContent: 'center',
						backgroundColor: '#edf0f0',
						minHeight: '90vh',
						px: 2, py: 1}}>

					<Typography sx={{fontSize: 40, letterSpacing: 5, p: 10, pb: 1}}>
							Gabriela Shamblin
					</Typography>

					<Typography sx={{fontSize: 24, letterSpacing: 2, p: 10, pt: 0}}>
							Student and Programmer
					</Typography>

					<CustomBox id="project1" sx={{
						maxWidth: 1200,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 5, p: 1}}>

						<Typography sx={{fontSize: 25}}>
							About
						</Typography>

						<Box>
							<Typography sx={{fontSize: 20}}>
								I began programming in 2018 as a curious high school student. Today I'm attending the University of Central Florida for Computer Science and work part-time as a TA. I expect to graduate with my Bachelors in Spring 2024, and plan to begin my Masters in Computer Science soon after.
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
								I was recently accepted into the Computer Science Accelerated BS to MS program. I'm also doing research this semester and working in one of the virtual reality labs here at UCF.
							</Typography>
						</Box>

					</CustomBox>
					
					<Typography sx={{fontSize: 20}}>
							*This site is a work in progress, it may change in the coming weeks*
					</Typography>
				
				</Box>
			</div>
		</React.Fragment>
  );
}

export default Home;
