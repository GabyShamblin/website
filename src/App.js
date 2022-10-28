import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

const MenuText = styled(Typography)(() => ({
  minWidth: 100,
	fontSize: 20,
	color: "#000000",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	}
}));

function App() {

  return (
		<React.Fragment>
			<Box alignItems='center' sx={{
				display: 'flex', 
				justifyContent: 'center', 
				fontSize: 20,
				minHeight: 50,
				backgroundColor: '#c2c2c2',
				top: 0}}>

				<Box alignItems='center' sx={{
					display: 'flex', 
					justifyContent: 'space-evenly', 
					textAlign: 'center',
					width: '80%'}}>

					<Link to="/" style={{textDecoration: 'none'}}>
						<MenuText sx={{m: 'auto'}}>
								<strong>Home</strong>
						</MenuText>
					</Link>

					<Link to="/portfolio" style={{textDecoration: 'none'}}>
						<MenuText sx={{m: 'auto'}}>
								<strong>Portfolio</strong>
						</MenuText>
					</Link>

					<Link to="/resume" style={{textDecoration: 'none'}}>
						<MenuText sx={{m: 'auto'}}>
								<strong>Resume</strong>
						</MenuText>
					</Link>

					<Link to="/contact" style={{textDecoration: 'none'}}>
						<MenuText sx={{m: 'auto'}}>
								<strong>Contact</strong>
						</MenuText>
					</Link>

				</Box>
			</Box>

			<Outlet />
		</React.Fragment>
  );
}

export default App;
