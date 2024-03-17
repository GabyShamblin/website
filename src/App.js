import * as React from 'react';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import logo from './pages/public/logo_blue.png';

const MenuText = styled(Typography)(() => ({
  minWidth: 100,
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	}
}));

function App() {
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}
	
  return (
		<React.Fragment>
			<div className="App-header">
				<Box alignItems='flex-end' sx={{
					display: 'flex', 
					justifyContent: 'center',
					minHeight: 50,
					minWidth: '95%',
					x: 0}}>

					<Grid container justifyContent='space-between' direction={{xs:'column-reverse', sm:'column-reverse', md:'row'}}>
						<Grid container item justifyContent={{xs:'center', sm:'center', md:'flex-start'}} xs={12} sm={12} md={6} sx={{textAlign: 'center'}}>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/' ? '#1e1e1e' : '#26262f'}}>
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

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/portfolio' ? '#1e1e1e' : '#26262f'}}>
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

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/resume' ? '#1e1e1e' : '#26262f'}}>
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

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/contact' ? '#1e1e1e' : '#26262f'}}>
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

						<Grid item sx={{textAlign: 'center'}}>
							{/* <Typography sx={{fontSize: 30, letterSpacing: 5}}>
								Gabriela Shamblin
							</Typography> */}
							<img src={logo} alt='Gabriela Shamblin'/>
						</Grid>
					</Grid>
				</Box>

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
