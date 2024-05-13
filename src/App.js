import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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

function App() {
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
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
				</Box>

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
