import * as React from 'react';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MenuText = styled(Typography)(() => ({
  minWidth: 100,
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	}
}));

const UpArrow = styled(Typography)(() => ({
	position: 'fixed',
	bottom: 10,
	right: 35,
  maxWidth: 100,
	rotate: '90deg',
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	},
	// border: '2px solid #1efc0f',
}));



function App() {
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		console.log("Path: " + path);
		setPath(window.location.pathname);
	}

	let notHome = /\w(?!#)/.test(path);
	if (notHome) console.log("This page is not home or has a #");
	else console.log("Yes this is home");
	
  return (
		<React.Fragment>
			<div className="App-header">
				<Box alignItems='flex-end' sx={{
					display: 'flex', 
					justifyContent: 'left',
					minHeight: 50,
					minWidth: '95%',
					x: 0}}>

					{/* { notHome &&
						<Link to="/" onClick={() => setPath('/')} style={{textDecoration: 'none'}}>
							<MenuText>
								<div className='banner-align'>
									<ArrowBackIosIcon/> Back
								</div>
							</MenuText>
						</Link>
					} */}
					<Grid container justifyContent='space-between' direction={{xs:'column-reverse', sm:'column-reverse', md:'row'}}>
						<Grid container item justifyContent={{xs:'center', sm:'center', md:'flex-start'}} xs={12} sm={12} md={6} sx={{textAlign: 'center'}}>

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
					</Grid>
				</Box>

				<HashLink smooth to={path + '#'} style={{textDecoration: 'none'}}>
					<UpArrow>
						<ArrowBackIosIcon fontSize='large'/>
					</UpArrow>
				</HashLink>

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
