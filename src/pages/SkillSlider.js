import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Slide, Typography } from '@mui/material';

const SliderBox = styled(Box)(() => ({
  backgroundColor: 'rgba(105, 105, 105)',
	borderRadius: 50,
	mb: 5,
	p: 1,
	display: 'flex',
	justifyContent: 'flex-start',
	overflow: 'hidden'
}));

const SkillSlider = ({name, color, textWhite = false, length, showBox}) => {
	
	const containerRef = React.useRef(null);
	let textColor = '';
	if (textWhite) {
		textColor = 'rgba(255, 255, 255)'
	} else {
		textColor = 'rgba(0, 0, 0)'
	}


  return (
		<SliderBox sx={{
		backgroundColor: 'rgba(105, 105, 105)',
		m: 'auto', p: 0.5, mb: 1}}>
			<Slide 
				direction="right" 
				in={showBox} 
				container={containerRef.current} 
				timeout={1000}
			>
				<Box sx={{
				backgroundColor: color,
				borderRadius: 10,  
				width: length}}
				>
					<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1, color: textColor}}>
						{name}
					</Typography>
				</Box>
			</Slide>
		</SliderBox>
  );
}

export default SkillSlider;
