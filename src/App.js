import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

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
	if (path != window.location.pathname) {
		setPath(window.location.pathname);
	}
	
  return (
		<React.Fragment>
			<div className="App-header">
				<Box alignItems='flex-end' sx={{
					display: 'flex', 
					justifyContent: 'center',
					minHeight: 50,
					width: '95%',
					top: 0, bottom: 0}}>

					<Grid container justifyContent='space-between' direction={{sm:'column-reverse', md:'row'}}>
						<Grid container item justifyContent='flex-start' sm={12} md={6} sx={{textAlign: 'center'}}>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path == '/' ? '#1e1e1e' : '#26262f'}}>
								<Link to="/" 
									onClick={() => setPath('/')} 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Home</strong>
									</MenuText>
								</Link>
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path == '/portfolio' ? '#1e1e1e' : '#26262f'}}>
								<Link to="/portfolio" 
									onClick={() => setPath('/portfolio')} 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Portfolio</strong>
									</MenuText>
								</Link>
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path == '/resume' ? '#1e1e1e' : '#26262f'}}>
								<Link to="/resume" 
									onClick={() => setPath('/resume')} 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Resume</strong>
									</MenuText>
								</Link>
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path == '/contact' ? '#1e1e1e' : '#26262f'}}>
								<Link to="/contact" 
									onClick={() => setPath('/contact')} 
									style={{textDecoration: 'none'}}
								>
									<MenuText>
											<strong>Contact</strong>
									</MenuText>
								</Link>
							</Grid>
						</Grid>
						<Grid item>
							<Typography sx={{fontSize: 30, letterSpacing: 5}}>
								Gabriela Shamblin
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
