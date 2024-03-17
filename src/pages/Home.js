import * as React from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Box, Grid, Hidden, Typography, List, ListItem } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import './App.css';

import me from './public/picture_cropped.png';

const MenuText = styled(Typography)(() => ({
  minWidth: 100,
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	}
}));

const CustomBox = styled(Box)(() => ({
  maxWidth: 1000,
	backgroundColor: "#73bed9", 
	color: 'black',
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

function Home() {
	useEffect(() => {
		document.title = 'Home';
	});
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}

  return (
		<React.Fragment>
			<div class="App">
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}
				>
					<div className='wrapper'>
						<div className='typing-home'>
							/* Student & Programmer */
						</div>
					</div>

					<Grid container justifyContent='space-between' direction={{xs:'column-reverse', sm:'column-reverse', md:'column'}}>
						<Grid container item justifyContent={{xs:'columnn'}} direction={{xs:'column'}} sx={{textAlign: 'center'}}>

							<Grid item sx={{p:0.5, px:1, mr:0.2}}>
								<Link to="/" 
									onClick={() => setPath('/')} 
									style={{textDecoration: 'none'}}
								>
									<Hidden smDown>
										<MenuText>
												<strong>Home</strong>
										</MenuText>
									</Hidden>
									<Hidden smUp>
										<MenuText sx={{fontSize: 18, minWidth: 70}}>
												<strong>Home</strong>
										</MenuText>
									</Hidden>
								</Link>
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2}}>
								<Link to="/portfolio" 
									onClick={() => setPath('/portfolio')} 
									style={{textDecoration: 'none'}}
								>
									<Hidden smDown>
										<MenuText>
												<strong>Portfolio</strong>
										</MenuText>
									</Hidden>
									<Hidden smUp>
										<MenuText sx={{fontSize: 18, minWidth: 70}}>
												<strong>Portfolio</strong>
										</MenuText>
									</Hidden>
								</Link>
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2}}>
								<Link to="/resume" 
									onClick={() => setPath('/resume')} 
									style={{textDecoration: 'none'}}
								>
									<Hidden smDown>
										<MenuText>
												<strong>Resume</strong>
										</MenuText>
									</Hidden>
									<Hidden smUp>
										<MenuText sx={{fontSize: 18, minWidth: 70}}>
												<strong>Resume</strong>
										</MenuText>
									</Hidden>
								</Link>
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2}}>
								<Link to="/contact" 
									onClick={() => setPath('/contact')} 
									style={{textDecoration: 'none'}}
								>
									<Hidden smDown>
										<MenuText>
												<strong>Contact</strong>
										</MenuText>
									</Hidden>
									<Hidden smUp>
										<MenuText sx={{fontSize: 18, minWidth: 70}}>
												<strong>Contact</strong>
										</MenuText>
									</Hidden>
								</Link>
							</Grid>
						</Grid>

						<Grid item>
							<img 
								id="me"
								src={me} 
								alt="A white/hispanic woman in a white button up shirt and suit jacket sitting in front of a dark background"/>
						</Grid>
					</Grid>

					{/* <Hidden smDown>
						<Typography variant='h1' sx={{fontSize: 40, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							
						</Typography>
					</Hidden>
					<Hidden smUp>
						<Typography variant='h1' sx={{fontSize: 30, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							
						</Typography>
					</Hidden> */}

					<Grid container spacing={{xs: 6, sm: 5, md: 2}} justifyContent='center' alignItems='center' direction="column">
						{/* <Grid item>
							<img 
								id="me"
								src={me} 
								alt="A white/hispanic woman in a white button up shirt and suit jacket sitting in front of a dark background"/>
						</Grid> */}

						<Grid item>
							<CustomBox id="project1" sx={{
								m: 'auto', p: 2}}>

								<Typography variant='h3' sx={{fontSize: 20}}>
									About
								</Typography>

								<List dense sx={{fontSize: 18}}>
									<ListItem>
										I began programming in 2018 as a curious high school student. Today I'm attending the University of Central Florida for Computer Science and with a focus in mixed reality. I recently graduated with my Bachelor's in December 2023 and am currently working towards my Master's in Computer Science.
									</ListItem>
								</List>
							</CustomBox>
						</Grid>

						{/* <Grid item>
							<CustomBox id="project1" sx={{
								m: 'auto', p: 2}}>

								<Typography sx={{fontSize: 25}}>
									What's New
								</Typography>

								<Box>
									<Typography sx={{fontSize: 20}}>
										I'm participating in research and volunteering at one of the virtual reality labs here at UCF.
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

export default Home;
