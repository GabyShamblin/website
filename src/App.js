import * as React from 'react';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

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

// Red: #e01a1a
// Green: #21e01a
// Blue: #281ae0
// Pink #e01acf
const theme = createTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					scrollbarColor: "#e01a1a #21e01a",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#21e01a",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#e01a1a",
            minHeight: 24,
            border: "3px solid #21e01a",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#281ae0",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#281ae0",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#281ae0",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#21e01a",
          },
				}
			}
		}
	}
})

function App() {
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}

	let notHome = /\w(?!#)/.test(path);
	// if (notHome) console.log("This page is not home or has a #");
	// else console.log("Yes this is home");
	
  return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<div className="App-header">
					<Box alignItems='flex-end' sx={{
						display: 'flex', 
						justifyContent: 'left',
						minHeight: 50,
						minWidth: '95%',
						x: 0}}>

						{ notHome &&
							<Link to="/" onClick={() => setPath('/')} style={{textDecoration: 'none'}}>
								<MenuText>
									<div className='banner-align'>
										<ArrowBackIosIcon/> Back
									</div>
								</MenuText>
							</Link>
						}

							{/* <Grid item sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 30, letterSpacing: 5}}>
									Gabriela Shamblin
								</Typography>
								<img src={logo} alt='Gabriela Shamblin'/>
							</Grid> */}
					</Box>

					<Outlet />
				</div>
			</React.Fragment>
		</ThemeProvider>
  );
}

export default App;
