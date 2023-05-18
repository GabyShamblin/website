import * as React from 'react';
import { useEffect } from 'react';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import './App.css';

import car from './public/car.jpg';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1000,
	backgroundColor: "#73bed9", 
	color: 'black',
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

function SenseRator() {
	useEffect(() => {
		document.title = 'Home';
	});

  return (
		<React.Fragment>
			<div class="App">
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}
				>

					<Hidden smDown>
						<Typography sx={{fontSize: 40, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							/* SenseRator */
						</Typography>
					</Hidden>
					<Hidden smUp>
						<Typography sx={{fontSize: 30, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							/* SenseRator */
						</Typography>
					</Hidden>

					<Grid container spacing={{xs: 6, sm: 5, md: 2}} justifyContent='center' alignItems='center' direction="column">
						<Grid item>
							<Box item width='400' m='auto'>
								<img src={car} alt="A small 3-wheeled, 2-seater car. It is black with yellow paint with the UCF and pegasus logo on the front and the words 'Future City Initiative' on the right side. It has a large glass windshield and a glass roof."></img>
							</Box>
						</Grid>

						{/* <Grid item>
							<CustomBox id="project1" sx={{
								m: 'auto', p: 2}}>

								<Typography sx={{fontSize: 25}}>
									About
								</Typography>

								<Box>
									<Typography sx={{fontSize: 20}}>
										I began programming in 2018 as a curious high school student. Today I'm attending the University of Central Florida for Computer Science and work part-time maintaining websites. I expect to graduate with my Bachelors in Fall 2023 and begin my Masters in Computer Science soon after.
									</Typography>
								</Box>
							</CustomBox>
						</Grid> */}
							
					</Grid>
				
				</Box>
			</div>
		</React.Fragment>
  );
}

export default SenseRator;
