import * as React from 'react';
import { Box, Typography} from '@mui/material';
import { flexbox } from '@mui/system';

const NoPage = () => {
  return (
		<div className="App">
			<Box sx={{
				display: flexbox,
				justifyContent: 'center',
				px: 2, py: 1}}>
				<Typography sx={{fontSize: 30, p: 10, pb: 2}}>
					404 page not found
				</Typography>
				<Typography sx={{fontSize: 30}}>
					:(
				</Typography>
			</Box>
		</div>
	);
};

export default NoPage;
